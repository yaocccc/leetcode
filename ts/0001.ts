/* 
 *  简单 两数之和
 *  给定nums target
 *  从nums中找出两者相加 == target 的索引值
 */
const f1 = (nums: number[], target: number): number[] => {
    const numIndexMap: Map<number, number> = new Map();
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (numIndexMap.has(diff)) return [i, numIndexMap.get(diff)!];
        numIndexMap.set(nums[i], i);
    }
    return [];
};

const tests = [
    { nums: [2, 7, 11, 15], target: 9, result: [0, 1] },
    { nums: [3,2,4], target: 6, result: [1, 2] },
    { nums: [3, 3], target: 6, result: [0, 1] }
];

import { assert } from './test';
console.log(
    tests.every(test => assert(f1(test.nums, test.target), test.result))
);
