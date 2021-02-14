/* 
 *  中等 字符串转换整数 (atoi)
 *  函数 myAtoi(string s) 的算法如下：
 *  读入字符串并丢弃无用的前导空格
 *  检查第一个字符（假设还未到字符末尾）为正还是负号，读取该字符（如果有）。 确定最终结果是负数还是正数。 如果两者都不存在，则假定结果为正。
 *  读入下一个字符，直到到达下一个非数字字符或到达输入的结尾。字符串的其余部分将被忽略。
 *  将前面步骤读入的这些数字转换为整数（即，"123" -> 123， "0032" -> 32）。如果没有读入数字，则整数为 0 。必要时更改符号（从步骤 2 开始）。
 *  如果整数数超过 32 位有符号整数范围 [−231,  231 − 1] ，需要截断这个整数，使其保持在这个范围内。具体来说，小于 −231 的整数应该被固定为 −231 ，大于 231 − 1 的整数应该被固定为 231 − 1 。
 *  返回整数作为最终结果。
 *  注意：
 *  本题中的空白字符只包括空格字符 ' ' 。
 *  除前导空格或数字后的其余字符串外，请勿忽略 任何其他字符。
 */
const f1 = (s: string): number => {
    s = s.trim();
    let result = 0, sign = 1;

    if (s[0] === '-') sign = -1;
    if (s[0] === '+' || s[0] === '-') s = s.slice(1);

    for (const char of s) {
        const num = Number(char);
        if (Number.isNaN(num) || char === " ") {
            break;
        }
        result = result * 10 + sign * num;
    }
    if (result > 2147483647) return 2147483647;
    if (result < -2147483648) return -2147483648;
    return result;
};

const tests = [
    { s: "42", result: 42 },
    { s: "   -42", result: -42 },
    { s: "4193 with words", result: 4193 },
    { s: "words and 987", result: 0 },
    { s: "-91283472332", result: -2147483648 },
];
import { assert } from './test';
console.log(
    tests.every(test => assert(f1(test.s), test.result))
);
