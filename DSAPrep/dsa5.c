// Postfix expression evaluation using stack
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

#define MAX 50

char post[MAX];
int stack[MAX], top = -1;

void push(int x)
{
    stack[++top] = x;
}

int pop()
{
    return stack[top--];
}

int main()
{
    int i, a, b, ans;

    printf("Enter postfix expression: ");
    scanf("%s", post);

    for (i = 0; post[i] != '\0'; i++)
    {
        if (post[i] >= '0' && post[i] <= '9')
            push(post[i] - '0');
        else
        {
            b = pop();
            a = pop();

            switch (post[i])
            {
            case '+': ans = a + b; break;
            case '-': ans = a - b; break;
            case '*': ans = a * b; break;
            case '/': ans = a / b; break;
            case '%': ans = a % b; break;
            case '^': ans = pow(a, b); break;
            default:
                printf("Invalid operator");
                exit(0);
            }
            push(ans);
        }
    }

    printf("Result = %d\n", pop());
    return 0;
}
