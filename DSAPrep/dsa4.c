// infix to postfix conversion using stack
#include <stdio.h>

char in[30], post[30], st[30];
int top=-1;

int prec(char c){
    if(c=='+'||c=='-') return 1;
    if(c=='*'||c=='/'||c=='%') return 2;
    if(c=='^'||c=='$') return 3;
    return -1;
}

void push(char c){ st[++top]=c; }
char pop(){ return st[top--]; }

int main(){
    int i=0,j=0; char x;
    scanf("%s",in);
    push('#');

    while(in[i]){
        if(isalnum(in[i]))
            post[j++]=in[i++];
        else if(in[i]=='(')
            push(in[i++]);
        else if(in[i]==')'){
            while((x=pop())!='(')
                post[j++]=x;
            i++;
        }
        else{
            while(prec(st[top])>=prec(in[i]))
                post[j++]=pop();
            push(in[i++]);
        }
    }
    while(top>0) post[j++]=pop();
    post[j]='\0';

    printf("Postfix: %s",post);
}
