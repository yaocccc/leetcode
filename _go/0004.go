/*
 *  困难 寻找两个正序数组的中位数
 *  给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的中位数。
 *  设计一个时间复杂度为 O(log (m+n)) 的算法
 */
package main

import "fmt"

type Test struct {
	nums1  []int
	nums2  []int
	result float64
}

func f1(nums1, nums2 []int) float64 {
	result := make([]int, 0, 0)
	l := len(nums1) + len(nums2)
	for len(nums1) > 0 && len(nums2) > 0 {
		if nums1[0] < nums2[0] {
			result = append(result, nums1[0])
			nums1 = nums1[1:]
		} else {
			result = append(result, nums2[0])
			nums2 = nums2[1:]
		}
	}
	result = append(result, nums1...)
	result = append(result, nums2...)

	if l%2 != 0 {
		return float64(result[l/2])
	}
	num1 := float64(result[(l-1)/2]) / 2
	num2 := float64(result[l/2]) / 2
	return num1 + num2
}

func main() {
	tests := []Test{
		{nums1: []int{1, 3}, nums2: []int{2}, result: 2.0},
		{nums1: []int{1, 2}, nums2: []int{3, 4}, result: 2.5},
		{nums1: []int{0, 0}, nums2: []int{0, 0}, result: 0},
		{nums1: []int{}, nums2: []int{1}, result: 1.0},
		{nums1: []int{2}, nums2: []int{}, result: 2.0},
	}
	for _, test := range tests {
		fmt.Println(f1(test.nums1, test.nums2) == test.result)
	}
}
