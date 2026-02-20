//stack and palindrome
#include <stdio.h>
#include <stdlib.h>
#define MAX 4
int s[MAX], top = -1;

void push(int x)
{
    if (top == MAX - 1)
        printf("\nStack Overflow");
    else
        s[++top] = x;
}

int pop()
{
    if (top == -1)
    {
        printf("\nStack Underflow");
        return -1;
    }
    return s[top--];
}

void display()
{
    int i;
    if (top == -1)
    {
        printf("\nStack is empty");
        return;
    }
    for (i = top; i >= 0; i--)
        printf("| %d |\n", s[i]);
}

void palindrome()
{
    int i, flag = 1;

    for (i = 0; i <= top / 2; i++)
        if (s[i] != s[top - i])
            flag = 0;

    if (flag)
        printf("\nPalindrome number");

    else
        printf("\nNot a palindrome number");
}

int main()
{
    int ch, x;
    while (1)
    {
        printf("\n1.Push\n2.Pop\n3.Palindrome\n4.Display\n5.Exit");
        printf("\nEnter choice: ");
        scanf("%d", &ch);
         
        switch (ch)
        {
        case 1:printf("enter the element: "); scanf("%d", &x); push(x); break;
        case 2: x = pop(); if (x != -1) printf("Popped: %d", x); break;
        case 3: palindrome(); break;
        case 4: display(); break;
        case 5: exit(0);
        default: printf("Invalid choice");
        }
    }
}
