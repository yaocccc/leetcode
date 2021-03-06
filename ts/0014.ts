/*
 *  简单 最长公共前缀
 *  编写一个函数来查找字符串数组中的最长公共前缀。
 *  如果不存在公共前缀，返回空字符串 ""。
 */
const f1 = (strs: string[]): string => {
    if (!strs.length) return "";
    const minlen = Math.min(...strs.map(str => str.length));
    let result = "";
    for (let i = 0; i < minlen; i++) {
        if (strs.some(str => str[i] !== strs[0][i]))
            break;
        result += strs[0][i];
    }
    return result;
};

const tests = [
    {strs: ["flower","flow","flight"], result: "fl"},
    {strs: ["dog","racecar","car"], result: ""},
];

import { assert } from './test';
console.log(
    tests.every(test => assert(f1(test.strs), test.result))
);
