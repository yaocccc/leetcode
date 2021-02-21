/* 
 *  中等 盛最多水的容器
 *  给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 
 *  在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)
 *  找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水
 */
const f1 = (height: number[]): number => {
    let l = 0, r = height.length - 1, result = 0;
    while (l < r) {
        result = Math.max(Math.min(height[l], height[r]) * (r - l), result);
        if (height[l] < height[r]) l++;
        else r--;
    };
    return result;
};

const tests = [
    {height: [1,8,6,2,5,4,8,3,7], result: 49},
    {height: [1,1], result: 1},
    {height: [4,3,2,1,4], result: 16},
    {height: [1,2,1], result: 2},
];

import { assert } from './test';
console.log(
    tests.every(test => assert(f1(test.height), test.result))
);
