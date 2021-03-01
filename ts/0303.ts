/* 
 *  简单 区域和检索-数组不可变
 *  给定一个整数数组  nums，求出数组从索引 i 到 j（i ≤ j）范围内元素的总和，包含 i、j 两点。
 *  实现 NumArray 类：
 *  NumArray(int[] nums) 使用数组 nums 初始化对象
 *  int sumRange(int i, int j) 返回数组 nums 从索引 i 到 j（i ≤ j）范围内元素的总和，包含 i、j 两点（也就是 sum(nums[i], nums[i + 1], ... , nums[j])）
 */
class NumArray {
    sums: number[]
    constructor(nums: number[]) {
        if (nums.length === 0) return;
        this.sums = [];
        this.sums[0] = nums[0];
        for (let i = 1; i < nums.length; i++) {
            this.sums[i] = this.sums[i - 1] + nums[i]
        }
    }
    sumRange(i: number, j: number): number {
        return i == 0 ? this.sums[j] : this.sums[j] - this.sums[i - 1];
    }
};

const testNumArray = new NumArray([-2, 0, 3, -5, 2, -1]);
const tests: {ij: [number, number], result: number}[] = [
    { ij: [0, 2], result: 1 },
    { ij: [2, 5], result: -1 },
    { ij: [0, 5], result: -3 },
];

import { assert } from './test';
console.log(
    tests.every(test => assert(testNumArray.sumRange(...test.ij), test.result))
);
