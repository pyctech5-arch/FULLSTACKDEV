// singly linked list with insert and delete at both ends
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct node
{
    char usn[20], name[50], branch[10];
    int sem;
    unsigned long long phno;
    struct node *link;
};

struct node *first = NULL, *last = NULL;
int count = 0;

struct node* create()
{
    struct node *t = (struct node*)malloc(sizeof(struct node));
    printf("Enter usn name branch sem phno:\n");
    scanf("%s %s %s %d %llu",
          t->usn, t->name, t->branch, &t->sem, &t->phno);
    t->link = NULL;
    count++;
    return t;
}

void insert_front()
{
    struct node *t = create();
    if (first == NULL)
        first = last = t;
    else
    {
        t->link = first;
        first = t;
    }
}

void insert_rear()
{
    struct node *t = create();
    if (first == NULL)
        first = last = t;
    else
    {
        last->link = t;
        last = t;
    }
}

void delete_front()
{
    struct node *p;
    if (first == NULL)
    {
        printf("List empty\n");
        return;
    }
    p = first;
    printf("Deleted: %s %s\n", p->usn, p->name);
    first = first->link;
    if (first == NULL) last = NULL;
    free(p);
    count--;
}

void delete_rear()
{
    struct node *p;
    if (first == NULL)
    {
        printf("List empty\n");
        return;
    }
    if (first == last)
    {
        printf("Deleted: %s %s\n", first->usn, first->name);
        free(first);
        first = last = NULL;
    }
    else
    {
        p = first;
        while (p->link != last)
            p = p->link;
        printf("Deleted: %s %s\n", last->usn, last->name);
        free(last);
        last = p;
        last->link = NULL;
    }
    count--;
}

void display()
{
    struct node *p;
    if (first == NULL)
    {
        printf("List empty\n");
        return;
    }
    for (p = first; p != NULL; p = p->link)
        printf("%s %s %s %d %llu\n",
               p->usn, p->name, p->branch, p->sem, p->phno);
    printf("Total nodes = %d\n", count);
}

int main()
{
    int ch;
    while (1)
    {
        printf("\n1.Create/Insert Front\n2.Insert Rear\n3.Display\n4.Delete Front\n5.Delete Rear\n6.Exit\n");
        scanf("%d", &ch);
        switch (ch)
        {
        case 1: insert_front(); break;
        case 2: insert_rear(); break;
        case 3: display(); break;
        case 4: delete_front(); break;
        case 5: delete_rear(); break;
        case 6: exit(0);
        default: printf("Invalid choice\n");
        }
    }
}
