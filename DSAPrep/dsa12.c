// hash table with linear probing
#include <stdio.h>
#define SIZE 10

int hashTable[SIZE];

void init() {
    for (int i = 0; i < SIZE; i++)
        hashTable[i] = -1;
}

void insert(int key) {
    int index = key % SIZE;
    int start = index;

    while (hashTable[index] != -1) {
        index = (index + 1) % SIZE;
        if (index == start) {
            printf("Hash Table is Full!\n");
            return;
        }
    }
    hashTable[index] = key;
}

void display() {
    printf("\nHash Table:\n");
    for (int i = 0; i < SIZE; i++)
        printf("%d => %d\n", i, hashTable[i]);
}

int main() {
    int n, key;
    init();
    printf("Enter number of employee keys: ");
    scanf("%d", &n);
    printf("Enter %d 4-digit keys:\n", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &key);
        insert(key);
    }
    display();
    return 0;
}