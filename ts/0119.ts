/* 
 *  简单 杨辉三角II
 *  在杨辉三角中，每个数是它左上方和右上方的数的和。
 *  1
 *  1 1
 *  1 2 1
 *  1 3 3 1
 */
const f1 = (rowIndex: number): number[] => {
    const result: number[] = new Array(rowIndex + 1).fill(0);
    result[0] = 1;
    for (let i = 0; i < rowIndex; i++)
        for (let j = i + 1; j >= 1; j--)
            result[j] += result[j - 1];
    return result;
};

const tests = [
    { k: 3, result: [1, 3, 3, 1]},
    { k: 4, result: [1, 4, 6, 4, 1]},
    { k: 5, result: [1, 5, 10, 10, 5, 1]},
];

import { assert } from './test';
console.log(
    tests.every(test => assert(f1(test.k), test.result))
);
