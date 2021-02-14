/* 
 *  简单 两个数组的交集II
 *  给定两个数组，编写一个函数来计算它们的交集。
 */
const f1 = (nums1: number[], nums2: number[]): number[] => {
    const result: number[] = [];
    const arr1numberCountMap: Map<number, number> = new Map();
    nums1.forEach(num => arr1numberCountMap.set(num, (arr1numberCountMap.get(num) || 0) + 1));
    nums2.forEach(num => {
        if (arr1numberCountMap.get(num) > 0) {
            result.push(num);
            arr1numberCountMap.set(num, arr1numberCountMap.get(num) - 1);
        }
    });
    return result;
};

const tests = [
    { nums1: [1, 2, 2, 1], nums2: [2, 2], result: [2, 2] },
    { nums1: [4, 9, 5], nums2: [9, 4, 9, 8, 4], result: [4, 9] }
];

import { assert } from './test';
console.log(
    tests.every(test => assert(f1(test.nums1, test.nums2), test.result))
);
