/*
 *  中等 盛最多水的容器
 *  给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai)
 *  在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)
 *  找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水
 */
package main

import "fmt"

type Test struct {
	height []int
	result int
}

func f1(height []int) (result int) {
	l := 0
	r := len(height) - 1
	for l < r {
		tempHeight := height[l]
		if height[r] < tempHeight {
			tempHeight = height[r]
		}
		if result < (r-l)*tempHeight {
			result = (r - l) * tempHeight
		}
		if height[l] < height[r] {
			l++
		} else {
			r--
		}
	}
	return
}

func main() {
	tests := []Test{
		{height: []int{1, 8, 6, 2, 5, 4, 8, 3, 7}, result: 49},
		{height: []int{1, 1}, result: 1},
		{height: []int{4, 3, 2, 1, 4}, result: 16},
		{height: []int{1, 2, 1}, result: 2},
	}
	for _, test := range tests {
		fmt.Println(f1(test.height) == test.result)
	}
}
