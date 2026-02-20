// DFS and BFS on graph represented using adjacency matrix
#include <stdio.h>
#include <stdlib.h>
#define M 20

int g[M][M], v[M], n;

void dfs(int s){
    v[s]=1; printf("%d ",s);
    for(int i=0;i<n;i++)
        if(g[s][i] && !v[i]) dfs(i);
}

void bfs(int s){
    int q[M],f=0,r=0;
    for(int i=0;i<n;i++) v[i]=0;
    v[s]=1; q[r++]=s;
    while(f<r){
        s=q[f++]; printf("%d ",s);
        for(int i=0;i<n;i++)
            if(g[s][i] && !v[i])
                v[i]=1, q[r++]=i;
    }
}

int main(){
    int ch,s;
    while(1){
        scanf("%d",&ch);
        if(ch==1){
            scanf("%d",&n);
            for(int i=0;i<n;i++)
                for(int j=0;j<n;j++)
                    scanf("%d",&g[i][j]);
        }
        else if(ch==2){
            scanf("%d",&s);
            for(int i=0;i<n;i++) v[i]=0;
            dfs(s);
        }
        else if(ch==3){
            scanf("%d",&s);
            bfs(s);
        }
        else exit(0);
    }
}
