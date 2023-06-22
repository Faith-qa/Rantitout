#include <stdio.h>

void print_fibonacci_sequence(int n) {
    int a = 1, b = 2, next, count;

    printf("%d, %d, ", a, b);

    for (count = 3; count <= n; count++) {
        next = a + b;
        printf("%d", next);

        if (count != n) {
            printf(", ");
        }

        a = b;
        b = next;
    }

    printf("\n");
}

int main() {
    int n = 98;
    print_fibonacci_sequence(n);

    return 0;
}