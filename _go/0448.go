/*
 *  简单 找到数组中消失的数字
 *  给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。
 *  找到所有在 [1, n] 范围之间没有出现在数组中的数字。
 *  您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。
 */
package main

import (
	"fmt"
	"reflect"
	"sort"
)

type Test struct {
	nums, result []int
}

func abs(num int) int {
	if num < 0 {
		return -num
	}
	return num
}

func f1(nums []int) (result []int) {
	for i := 0; i < len(nums); i++ {
		index := abs(nums[i]) - 1
		nums[index] = -abs(nums[index])
	}
	for i := 0; i < len(nums); i++ {
		if nums[i] > 0 {
			result = append(result, i+1)
		}
	}
	return
}

func f2(nums []int) (result []int) {
	numsSet := make(map[int]bool)
	for _, num := range nums {
		numsSet[num] = true
	}
	for i := 1; i <= len(nums); i++ {
		_, ok := numsSet[i]
		if !ok {
			result = append(result, i)
		}
	}
	return
}

func main() {
	tests := []Test{
		{[]int{4, 3, 2, 7, 8, 2, 3, 1}, []int{5, 6}},
	}
	for _, test := range tests {
		result := f1(test.nums)
		sort.Ints(result)
		sort.Ints(test.result)
		fmt.Println(reflect.DeepEqual(result, test.result))
	}

	tests = []Test{
		{[]int{4, 3, 2, 7, 8, 2, 3, 1}, []int{5, 6}},
	}
	for _, test := range tests {
		result := f2(test.nums)
		sort.Ints(result)
		sort.Ints(test.result)
		fmt.Println(reflect.DeepEqual(result, test.result))
	}
}
