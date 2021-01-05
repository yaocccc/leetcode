function reverse(x: number): number {
    let sign = x > 0 ? 1 : -1, str = '';
    for (const char of String(sign * x).replace(/0*$/, ''))
        str = char + str;
    let result = sign * Number(str);
    return result > 2147483647 || result < -2147483648 ? 0 : result;
};
