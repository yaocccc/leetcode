/*
 *  中等 无重叠区间
 *  题目描述
 *      给定多个区间，计算让这些区间互不重叠所需要移除区间的最少个数。起止相连不算重叠。
 *  题解
 *      在选择要保留区间时，区间的结尾十分重要：选择的区间结尾越小，余留给其它区间的空间就越大，就越能保留更多的区间。
 *      因此，我们采取的贪心策略为，优先保留结尾小且不相交的区间。
 *      具体实现方法为，先把区间按照结尾的大小进行增序排序，每次选择结尾最小且和前一个选择的区间不重叠的区间。
 *      在样例中，排序后的数组为 [[1,2], [1,3], [2,4]]。
 *      按照我们的贪心策略，首先初始化为区间[1,2]；
 *      由于 [1,3] 与 [1,2] 相交，我们跳过该区间；
 *      由于 [2,4] 与 [1,2] 不相交，我们将其保留。
 *      因此最终保留的区间为 [[1,2], [2,4]]。
 */
const f1 = (areas: number[][]): number => {
    areas.sort((a, b) => a[1] - b[1]);
    let result: number = 0;
    let pre = areas[0][1];
    for (let i = 1; i < areas.length; i++) {
        if (areas[i][0] < pre) result++;
        else pre = areas[i][1];
    }
    return result;
};

const tests = [
    { areas: [ [1, 2], [2, 3], [3, 4], [1, 3] ], result: 1 },
    { areas: [ [1, 2], [1, 2], [1, 2] ], result: 2 },
    { areas: [ [1, 2], [2, 3] ], result: 0 },
];

import { assert } from './test';
console.log(
    tests.every(test => assert(f1(test.areas), test.result))
);
