/* 
 *  简单 种花问题
 *  假设有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花不能种植在相邻的地块上，它们会争夺水源，两者都会死去。
 *  
 *  给你一个整数数组  flowerbed 表示花坛，由若干 0 和 1 组成，其中 0 表示没种植花，1 表示种植了花。另有一个数 n ，能否在不打破种植规则的情况下种入 n 朵花？能则返回 true ，不能则返回 false。
 */
const f1 = (flowerbed: number[], n: number): boolean => {
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i - 1] || flowerbed[i] || flowerbed[i + 1]) continue;
        flowerbed[i] = 1, n--;
        if (n <= 0) return true;
    }
    return n <= 0;
};

const tests = [
    { flowerbed: [1, 0, 0, 0, 1], n: 1, result: true },
    { flowerbed: [1, 0, 0, 0, 1], n: 2, result: false },
    { flowerbed: [0, 0, 1, 0, 1], n: 1, result: true },
    { flowerbed: [0, 0, 0, 0, 1, 0, 1], n: 0, result: true },
];

import { assert } from './test';
console.log(
    tests.every(test => assert(f1(test.flowerbed, test.n), test.result))
);
