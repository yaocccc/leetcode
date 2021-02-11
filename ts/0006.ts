/*
 *  中等 Z字形变换
 *  将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
 *
 *  比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：
 *  P   A   H   N
 *  A P L S I I G
 *  Y   I   R
 *  之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。
 */
const f1 = (s: string, numRows: number): string => {
    if (numRows === 1) return s;

    let diff: 1 | -1 = -1, line = 0;
    let resultArr = Array(numRows).fill('');
    
    for (let i = 0; i < s.length; i++) {
        resultArr[line] += s[i];
        diff *= line % (numRows - 1) ? 1 : -1;
        line += diff;
    }
    return resultArr.reduce((str, item) => str += item, '');
}

export {
    f1
}
