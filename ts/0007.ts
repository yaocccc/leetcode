/* 
 *  简单 整数反转
 *  给你一个 32 位的有符号整数 x ，返回 x 中每位上的数字反转后的结果。
 *  如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
 */
const f1 = (x: number): number => {
    let zf = x > 0 ? 1 : -1, str = '';
    let xStr = String(zf * x).replace(/0*$/g, '');
    for (const char of xStr) str = char + str;
    let result = zf * Number(str);
    return result > 2147483647 || result < -2147483648 ? 0 : result;
}

const f2 = (x: number): number => {
    let y = 0;
    while (x !== 0) {
        y = y * 10 + x % 10;
        if (y > 2147483647 || y < -2147483648) return 0;
        x = x / 10 - x % 10 / 10;
    }
    return y;
}

export {
    f1,
    f2
}
