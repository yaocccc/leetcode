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
package main

import "fmt"

type Test struct {
	ratings []int
	result  int
}

func candy(ratings []int) int {
	result := len(ratings)
	if len(ratings) < 2 {
		return result
	}
	candies := make([]int, len(ratings))
	for i := 1; i < len(ratings); i++ {
		if ratings[i] > ratings[i-1] {
			candies[i] = candies[i-1] + 1
		}
	}
	for i := len(ratings) - 2; i >= 0; i-- {
		if ratings[i] > ratings[i+1] && candies[i] <= candies[i+1] {
			candies[i] = candies[i+1] + 1
		}
	}
	for _, num := range candies {
		result += num
	}
	return result
}

func main() {
	tests := []Test{
		{
			ratings: []int{1, 0, 2},
			result:  5,
		},
		{
			ratings: []int{1, 2, 2},
			result:  4,
		},
		{
			ratings: []int{1, 2, 87, 87, 87, 2, 1},
			result:  13,
		},
	}
	for _, test := range tests {
		fmt.Println(candy(test.ratings) == test.result)
	}
}
