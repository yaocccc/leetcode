/* 
 *  简单 分发饼干
 *  题目描述
 *      有一群孩子和一堆饼干，每个孩子有一个饥饿度，每个饼干都有一个大小。
 *      每个孩子只能吃最多一个饼干，且只有饼干的大小大于孩子的饥饿度时，这个孩子才能吃饱。
 *      求解最多有多少孩子可以吃饱。
 *  输入输出样例
 *      输入两个数组，分别代表孩子的饥饿度和饼干的大小。输出最多有多少孩子可以吃饱的数量。
 *      Input: [1,2], [1,2,3] Output: 2
 *      在这个样例中，我们可以给两个孩子喂 [1,2]、 [1,3]、 [2,3] 这三种组合的任意一种。
 *  题解 
 *      因为饥饿度最小的孩子最容易吃饱，所以我们先考虑这个孩子。
 *      为了尽量使得剩下的饼干可以满足饥饿度更大的孩子，所以我们应该把大于等于这个孩子饥饿度的、且大小最小的饼干给这个孩子。
 *      满足了这个孩子之后，我们采取同样的策略，考虑剩下孩子里饥饿度最小的孩子，直到没有满足条件的饼干存在。
 */
const f1 = (g: number[], s: number[]): number => {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let children = 0, cookie = 0;
    while (children < g.length && cookie < s.length) {
        if (g[children] <= s[cookie]) children++;
        cookie++;
    }
    return children;
};

const tests = [
    { g: [1, 2, 3], s: [1, 1], result: 1 },
    { g: [1, 2], s: [1, 2, 3], result: 2 },
];

import { assert } from './test';
console.log(
    tests.every(test => assert(f1(test.g, test.s), test.result))
);
