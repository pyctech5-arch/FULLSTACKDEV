#include<stdio.h>
#include<stdlib.h>
  

struct Day
{
    char *dname,*act;
    int d,m,y;    
};
void read(struct Day *c ,int n){
          for(int i=0; i<n; i++){
            printf("\nDay: %d",i+1);
        c[i].dname=malloc(20);
        c[i].act=malloc(100);
        printf("\nEnter day name: ");
        scanf("%s",c[i].dname);
        printf("\nEnter date (d m y): ");
        scanf("%d %d %d",&c[i].d,&c[i].m,&c[i].y);
    printf("\nEnter activity: ");
        scanf(" %[^\n]",c[i].act);
          }      
    }
 void display(struct Day *c ,int n){
     printf("\n---- WEEK ACTIVITY CALENDAR ----\n");
     printf("Day\tDate\t\tActivity\n");
     for(int i=0; i<n; i++){
         printf("%s\t%d-%d-%d\t%s\n",
         c[i].dname,c[i].d,c[i].m,c[i].y,c[i].act);
     }
 }
 int main(){
     int n;
     printf("Enter number of days: ");
     scanf("%d",&n);
     struct Day *cal=malloc(n*sizeof(struct Day));
     if(cal==NULL){
         printf("Memory allocation failed\n");
         return 0;
     }
     read(cal,n);
     display(cal,n);
     for(int i=0; i<n; i++){
         free(cal[i].dname);
         free(cal[i].act);
     }
     free(cal);
     return 0;
 }