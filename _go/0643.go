/*
 *  简单 子数组最大平均数 I
 *  给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。
 */
package main

import "fmt"

type Test struct {
	nums   []int
	k      int
	result float64
}

func f1(nums []int, k int) float64 {
	sum := 0
	for i := 0; i < k; i++ {
		sum += nums[i]
	}
	max := sum
	for i := k; i < len(nums); i++ {
		sum = sum + nums[i] - nums[i-k]
		if sum > max {
			max = sum
		}
	}
	return float64(max) / float64(k)
}

func main() {
	tests := []Test{
		{[]int{1, 12, -5, -6, 50, 3}, 4, 12.75},
	}
	for _, test := range tests {
		fmt.Println(f1(test.nums, test.k) == test.result)
	}
}
