/*
 *  中等 盛最多水的容器
 *  给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai)
 *  在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)
 *  找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水
 */
package main

import "fmt"

type T struct {
	height []int
	result int
}

func f1(height []int) int {
	result, l, r := 0, 0, len(height)-1
	for l < r {
		width, high := r-l, 0
		if height[l] < height[r] {
			high = height[l]
			l++
		} else {
			high = height[r]
			r--
		}
		temp := width * high
		if temp > result {
			result = temp
		}
	}
	return result
}

func main() {
	ts := []T{
		{[]int{1, 8, 6, 2, 5, 4, 8, 3, 7}, 49},
		{[]int{1, 1}, 1},
		{[]int{4, 3, 2, 1, 4}, 16},
		{[]int{1, 2, 1}, 2},
	}

	for _, t := range ts {
		result := f1(t.height)
		fmt.Println(result == t.result)
	}
}
