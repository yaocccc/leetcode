/* 
 *  简单 子数组最大平均数 I
 *  给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。
 */
const f1 = (nums: number[], k: number): number => {
    let sum = 0;
    for (let i = 0; i < k; i++) sum += nums[i];
    let max = sum;
    for (let i = k; i < nums.length; i++) {
        sum = sum + nums[i] - nums[i - k];
        max = Math.max(max, sum);
    }
    return max / k;
};

const tests = [
    { nums: [1, 12, -5, -6, 50, 3], k: 4, result: 12.75 }
];

import { assert } from './test';
console.log(
    tests.every(test => assert(f1(test.nums, test.k), test.result))
);
