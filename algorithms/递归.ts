function f1(n: number): number {
    if (n == 1) {
        return n;
    }

    return f1(n-1) + n;
}

console.log('f1', f1(100));

function f2(n: number): number {
    if (n <= 2) {
        return n;
    }
    return f2(n - 1) + f2(n - 2);
}

console.log('f2', f2(10));

function f3(n: number) {
    if (n === 1) {
        return 1;
    }
    return f3(n - 1) * n;
}

console.log('f3', f3(5));
