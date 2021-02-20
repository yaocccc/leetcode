/*
 *  简单 数组的度
 *  度: 最高频元素的最小下标差
 */
package main

import "fmt"

type Record struct {
	l, r, count int
}

type Test struct {
	nums   []int
	result int
}

func f1(nums []int) int {
	numsMap := make(map[int]Record)
	result := len(nums)
	maxCount := 0
	for index, num := range nums {
		current, ok := numsMap[num]
		if ok {
			current.r = index
			current.count++
		} else {
			current = Record{index, index, 1}
		}
		numsMap[num] = current
		if current.count > maxCount {
			maxCount = current.count
		}
	}
	for _, value := range numsMap {
		if value.count == maxCount && value.r-value.l+1 < result {
			result = value.r - value.l + 1
		}
	}
	return result
}

func main() {
	tests := []Test{
		{nums: []int{1, 2, 2, 3, 1}, result: 2},
		{nums: []int{1, 2, 2, 3, 1, 4, 2}, result: 6},
	}
	for _, test := range tests {
		fmt.Println(f1(test.nums) == test.result)
	}
}
