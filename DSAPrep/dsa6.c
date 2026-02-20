// Circular Queue Implementation

#include <stdio.h>
#include <stdlib.h>

#define QSIZE 4

int q[QSIZE], front = 0, rear = -1, count = 0;

void insert(int x)
{
    if (count == QSIZE)
    {
        printf("Queue Overflow\n");
        return;
    }
    rear = (rear + 1) % QSIZE;
    q[rear] = x;
    count++;
}

void del()
{
    if (count == 0)
    {
        printf("Queue Underflow\n");
        return;
    }
    printf("Deleted item: %d\n", q[front]);
    front = (front + 1) % QSIZE;
    count--;
}

void display()
{
    int i, pos = front;

    if (count == 0)
    {
        printf("Queue is Empty\n");
        return;
    }

    printf("Queue elements:\n");
    for (i = 1; i <= count; i++)
    {
        printf("%d\n", q[pos]);
        pos = (pos + 1) % QSIZE;
    }
}

int main()
{
    int ch, item;

    while (1)
    {
        printf("\n1.Insert\n2.Delete\n3.Display\n4.Exit\n");
        printf("Enter choice: ");
        scanf("%d", &ch);

        switch (ch)
        {
        case 1:
            printf("Enter item: ");
            scanf("%d", &item);
            insert(item);
            break;
        case 2:
            del();
            break;
        case 3:
            display();
            break;
        case 4:
            exit(0);
        default:
            printf("Invalid choice\n");
        }
    }
}
