/* 
 *  困难 分发糖果
 *  给定评分ratings
 *  每个孩子至少分配到一个糖果
 *  评分更高的孩子必须比两侧的孩子获得更多的糖果
 *  
 *  思路: 每次遍历只考虑相邻一侧的大小关系
 *  1 给所有小孩一颗糖
 *  2 从左向右比较，若右侧的孩子大
 *    则右侧孩子的糖果数为左侧孩子+1
 *  3 从右向左比较，若左侧的孩子评分高，且糖果不大于右侧孩子
 *    则左侧孩子的糖果数为右侧孩子+1
 */
const f1 = (ratings: number[]): number => {
    if (ratings.length < 2) return ratings.length;
    const candies = new Array(ratings.length).fill(1);
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) candies[i] = candies[i - 1] + 1;
    }
    for (let i = ratings.length - 2; i >= 0; i--)  {
        if (ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1])
            candies[i] = candies[i + 1] + 1;
    }
    return candies.reduce((sum, num) => sum + num);
};

const tests = [
    { ratings: [1, 0, 2], result: 5 },
    { ratings: [1, 2, 2], result: 4 },
    { ratings: [1,2,87,87,87,2,1], result: 13}
];

import { assert } from './test';
console.log(
    tests.every(test => assert(f1(test.ratings), test.result))
);
