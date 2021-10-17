/*
 *  简单 杨辉三角II
 *  在杨辉三角中，每个数是它左上方和右上方的数的和。
 *  1
 *  1 1
 *  1 2 1
 *  1 3 3 1
 */
package main

import (
	"fmt"
	"reflect"
	"sort"
)

type Test struct {
	k      int
	result []int
}

func f1(rowIndex int) []int {
	result := make([]int, rowIndex+1)
	result[0] = 1
	for i := 0; i < rowIndex; i++ {
		for j := i + 1; j >= 1; j-- {
			result[j] += result[j-1]
		}
	}
	return result
}

func main() {
	tests := []Test{
		{3, []int{1, 3, 3, 1}},
		{4, []int{1, 4, 6, 4, 1}},
		{5, []int{1, 5, 10, 10, 5, 1}},
	}
	for _, test := range tests {
		result := f1(test.k)
		sort.Ints(result)
		sort.Ints(test.result)
		fmt.Println(reflect.DeepEqual(result, test.result))
	}
}
