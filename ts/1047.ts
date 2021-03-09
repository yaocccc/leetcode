/* 
 *  简单 删除字符串中所有的相邻重复项
 *  在 S 上反复执行重复项删除操作，直到无法继续删除。
 *  在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。
 */
const f1 = (S: string): string => {
    const SArr = S.split("");
    let i = 0;
    while (i + 1 < SArr.length) {
        if (SArr[i] === SArr[i+1]) {
            SArr.splice(i, 2);
            i = Math.max(i - 1, 0);
        } else {
            i++;
        }
    }
    return SArr.join("");
};

const f2 = (S: string): string => {
    const SArr: string[] = [];
    for (const char of S) {
        if (char === SArr[SArr.length - 1]) SArr.pop();
        else SArr.push(char);
    }
    return SArr.join("");
};

const tests = [
    { S: "abbaca", result: "ca" }
];

import { assert } from './test';
console.log(
    tests.every(test => assert(f1(test.S), test.result)),
    tests.every(test => assert(f2(test.S), test.result))
);
