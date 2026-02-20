// multivariate polynomial using circular linked list
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

struct node {
    int co, ex, ey, ez;
    struct node *link;
};
typedef struct node NODE;

NODE *create(int c,int x,int y,int z){
    NODE *t = (NODE *)malloc(sizeof(NODE));
    t->co=c; t->ex=x; t->ey=y; t->ez=z; t->link=NULL;
    return t;
}

NODE *attach(NODE *t, NODE *h){
    NODE *c = h;
    while(c->link != h) c = c->link;
    c->link = t;
    t->link = h;
    return h;
}

NODE *readpoly(){
    int n,c,x,y,z,i;
    NODE *h = (NODE *)malloc(sizeof(NODE));
    h->link = h;
    printf("Enter number of terms: ");
    scanf("%d",&n);
    for(i=0;i<n;i++){
        printf("Enter co ex ey ez: ");
        scanf("%d%d%d%d",&c,&x,&y,&z);
        h = attach(create(c,x,y,z), h);
    }
    return h;
}

void display(NODE *p){
    NODE *c = p->link;
    while(c != p){
        printf("%dx^%dy^%dz^%d + ",c->co,c->ex,c->ey,c->ez);
        c = c->link;
    }
    printf("\n");
}

void evaluate(NODE *p){
    int x,y,z,res=0;
    NODE *c = p->link;
    printf("Enter x y z: ");
    scanf("%d%d%d",&x,&y,&z);
    while(c != p){
        res += c->co * pow(x,c->ex) * pow(y,c->ey) * pow(z,c->ez);
        c = c->link;
    }
    printf("Result = %d\n",res);
}

NODE *addpoly(NODE *p1,NODE *p2,NODE *p3){
    NODE *a=p1->link,*b=p2->link;
    while(a!=p1 && b!=p2){
        if(a->ex==b->ex && a->ey==b->ey && a->ez==b->ez){
            p3=attach(create(a->co+b->co,a->ex,a->ey,a->ez),p3);
            a=a->link; b=b->link;
        }
        else if(a->ex>b->ex){
            p3=attach(create(a->co,a->ex,a->ey,a->ez),p3);
            a=a->link;
        }
        else{
            p3=attach(create(b->co,b->ex,b->ey,b->ez),p3);
            b=b->link;
        }
    }
    while(a!=p1){ p3=attach(create(a->co,a->ex,a->ey,a->ez),p3); a=a->link; }
    while(b!=p2){ p3=attach(create(b->co,b->ex,b->ey,b->ez),p3); b=b->link; }
    return p3;
}

int main(){
    int ch;
    NODE *p1,*p2,*p3=(NODE *)malloc(sizeof(NODE));
    p3->link=p3;
    while(1){
        printf("\n1.Evaluate  2.Add  3.Exit\n");
        scanf("%d",&ch);
        if(ch==1){
            p1=readpoly(); display(p1); evaluate(p1);
        }
        else if(ch==2){
            p1=readpoly(); p2=readpoly();
            p3=addpoly(p1,p2,p3); display(p3);
        }
        else exit(0);
    }
}
