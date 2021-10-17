/*
 *  简单 两个数组的交集II
 *  给定两个数组，编写一个函数来计算它们的交集。
 */
package main

import (
	"fmt"
	"reflect"
	"sort"
)

type Test struct {
	nums1, nums2, result []int
}

func f1(nums1, nums2 []int) (result []int) {
	nums1NumCountMap := make(map[int]int)
	for _, num := range nums1 {
		v, ok := nums1NumCountMap[num]
		if ok {
			nums1NumCountMap[num] = v + 1
		} else {
			nums1NumCountMap[num] = 1
		}
	}
	for _, num := range nums2 {
		v, ok := nums1NumCountMap[num]
		if ok && v > 0 {
			result = append(result, num)
			nums1NumCountMap[num] = v - 1
		}
	}
	return
}

func main() {
	tests := []Test{
		{[]int{1, 2, 2, 1}, []int{2, 2}, []int{2, 2}},
		{[]int{4, 9, 5}, []int{9, 4, 9, 8, 4}, []int{4, 9}},
	}
	for _, test := range tests {
		result := f1(test.nums1, test.nums2)
		sort.Ints(result)
		sort.Ints(test.result)
		fmt.Println(reflect.DeepEqual(result, test.result))
	}
}
