/* 
 *  简单 数组的度
 *  度: 最高频元素的最小下标差
 */
const f1 = (nums: number[]): number => {
    const numsMap:Map<number, {
        l: number,
        r: number,
        count: number
    }> = new Map();
    let result = nums.length, maxCount = 0;
    nums.forEach((num, index) => {
        const current = numsMap.get(num) || {l: index, r: index, count: 0};
        current.r = index;
        current.count++;
        numsMap.set(num, current);
        maxCount = Math.max(maxCount, current.count);
    });
    numsMap.forEach(value => value.count === maxCount && (result = Math.min(result, value.r - value.l + 1)));
    return result;
};

const tests = [
    {nums: [1,2,2,3,1], result: 2},
    {nums: [1,2,2,3,1,4,2], result: 6},
];

import { assert } from './test';
console.log(
    tests.every(test => assert(f1(test.nums), test.result))
);
