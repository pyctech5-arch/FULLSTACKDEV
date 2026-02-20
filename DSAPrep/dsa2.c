// string pattern replacement
#include <stdio.h>
#include <string.h>

int main() {
    char str[50], pat[20], rep[20], res[50];
    int i = 0, j = 0, k, flag = 0;

    printf("Enter the main string: ");
    gets(str);

    printf("Enter the pattern to search: ");
    gets(pat);

    printf("Enter the replacement string: ");
    gets(rep);

    printf("\nOriginal String: %s\n", str);
    printf("Pattern: %s\n", pat);
    printf("Replacement: %s\n", rep);

    while (str[i]) {
        if (strncmp(&str[i], pat, strlen(pat)) == 0) {
            flag = 1;
            printf("\nPattern found at position %d", i);

            for (k = 0; rep[k]; k++)
                res[j++] = rep[k];

            i += strlen(pat);
        } else {
            res[j++] = str[i++];
        }
    }

    res[j] = '\0';

    if (flag)
        printf("Result String after replacement: %s\n", res);
    else   
        printf("Pattern not found\n");

    return 0;
}
