// doubly linked list for employee records with insert and delete at both ends
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct node
{
    int ssn;
    char name[50], dept[20], desg[20];
    float sal;
    unsigned long long phno;
    struct node *llink, *rlink;
};

struct node *first = NULL, *last = NULL;
int count = 0;

struct node* create()
{
    struct node *t = (struct node*)malloc(sizeof(struct node));
    printf("Enter ssn name dept desg salary phno:\n");
    scanf("%d %s %s %s %f %llu",
          &t->ssn, t->name, t->dept, t->desg, &t->sal, &t->phno);
    t->llink = t->rlink = NULL;
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
        t->rlink = first;
        first->llink = t;
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
        last->rlink = t;
        t->llink = last;
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
    printf("Deleted: %d %s\n", p->ssn, p->name);
    first = first->rlink;
    if (first != NULL) first->llink = NULL;
    else last = NULL;
    free(p);
    count--;
}

void delete_rear()
{
    struct node *p;
    if (last == NULL)
    {
        printf("List empty\n");
        return;
    }
    p = last;
    printf("Deleted: %d %s\n", p->ssn, p->name);
    last = last->llink;
    if (last != NULL) last->rlink = NULL;
    else first = NULL;
    free(p);
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
    for (p = first; p != NULL; p = p->rlink)
        printf("%d %s %s %s %.2f %llu\n",
               p->ssn, p->name, p->dept, p->desg, p->sal, p->phno);
    printf("Total employees = %d\n", count);
}

int main()
{
    int ch;
    while (1)
    {
        printf("\n1.Insert Front\n2.Insert Rear\n3.Display\n4.Delete Front\n5.Delete Rear\n6.Exit\n");
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
