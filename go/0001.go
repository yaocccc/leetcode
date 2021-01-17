/*
 *  简单 两数之和
 *  给定nums target
 *  从nums中找出两者相加 == target 的索引值
 */
package main

import (
	"fmt"
	"reflect"
	"sort"
)

type Test struct {
	nums   []int
	target int
	result []int
}

func twoSum(nums []int, target int) []int {
	numIndexMap := make(map[int]int)
	for i := 0; i < len(nums); i++ {
		diff := target - nums[i]
		index, ok := numIndexMap[diff]
		if ok {
			return []int{i, index}
		}
		numIndexMap[nums[i]] = i
	}
	return []int{}
}

func main() {
	tests := []Test{
		{
			nums:   []int{2, 7, 11, 15},
			target: 9,
			result: []int{0, 1},
		},
		{
			nums:   []int{3, 2, 4},
			target: 6,
			result: []int{1, 2},
		},
		{
			nums:   []int{3, 3},
			target: 6,
			result: []int{0, 1},
		},
	}
	for _, test := range tests {
		result := twoSum(test.nums, test.target)
		sort.Ints(result)
		sort.Ints(test.result)
		fmt.Println(reflect.DeepEqual(result, test.result))
	}
}
