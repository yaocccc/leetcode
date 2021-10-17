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

type T struct {
	nums   []int
	target int
	result []int
}

func f1(nums []int, target int) []int {
	m := make(map[int]int)
	for k, v := range nums {
		if idx, ok := m[target-v]; ok {
			return []int{k, idx}
		}
		m[v] = k
	}
	return nil
}

func main() {
	ts := []T{
		{[]int{2, 7, 11, 15}, 9, []int{0, 1}},
		{[]int{3, 2, 4}, 6, []int{1, 2}},
		{[]int{3, 3}, 6, []int{0, 1}},
	}

	for _, t := range ts {
		result := f1(t.nums, t.target)
		sort.Ints(result)
		sort.Ints(t.result)
		fmt.Println(reflect.DeepEqual(result, t.result))
	}
}
