// binary search tree with insert, inorder, preorder, postorder and search operations
#include <stdio.h>
#include <stdlib.h>

typedef struct node{
    int d;
    struct node *l,*r;
}N;

N* new(int k){
    N*t=malloc(sizeof(N));
    t->d=k; t->l=t->r=NULL;
    return t;
}

N* ins(N*r,int k){
    if(!r) return new(k);
    if(k<r->d) r->l=ins(r->l,k);
    else if(k>r->d) r->r=ins(r->r,k);
    return r;
}

void in(N*r){ if(r){ in(r->l); printf("%d ",r->d); in(r->r);} }
void pre(N*r){ if(r){ printf("%d ",r->d); pre(r->l); pre(r->r);} }
void post(N*r){ if(r){ post(r->l); post(r->r); printf("%d ",r->d);} }

void search(N*r,int k){
    if(!r) printf("Not found\n");
    else if(k==r->d) printf("Found\n");
    else if(k<r->d) search(r->l,k);
    else search(r->r,k);
}

int main(){
    N*root=NULL;
    int ch,k,a[]={6,9,5,2,8,15,24,14,7};
    while(1){
        scanf("%d",&ch);
        if(ch==1) for(int i=0;i<9;i++) root=ins(root,a[i]);
        else if(ch==2) in(root);
        else if(ch==3) pre(root);
        else if(ch==4) post(root);
        else if(ch==5){ scanf("%d",&k); search(root,k); }
        else exit(0);
    }
}
