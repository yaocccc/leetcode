/* 
 *  困难 寻找两个正序数组的中位数
 *  给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的中位数。
 *  设计一个时间复杂度为 O(log (m+n)) 的算法
 */
const f1 = (nums1: number[], nums2: number[]): number => {
    let result: number[] = [], len = nums1.length + nums2.length;
    while (nums1.length && nums2.length)
        result.push(nums1[0] < nums2[0] ? nums1.shift()! : nums2.shift()!);
    result = [...result, ...nums1, ...nums2];
    return len % 2 ?
        result[len >> 1] :
        (result[(len - 1) >> 1] + result[len >> 1]) / 2;
};

const tests = [
    { nums1: [1, 3], nums2: [2], result: 2.0 },
    { nums1: [1, 2], nums2: [3, 4], result: 2.5 },
    { nums1: [0, 0], nums2: [0, 0], result: 0 },
    { nums1: [], nums2: [1], result: 1.0 },
    { nums1: [2], nums2: [], result: 2.0 }
];

import { assert } from './test';
console.log(
    tests.every(test => assert(f1(test.nums1, test.nums2), test.result))
);

