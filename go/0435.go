/*
 *  中等 无重叠区间
 *  题目描述
 *      给定多个区间，计算让这些区间互不重叠所需要移除区间的最少个数。起止相连不算重叠。
 *  题解
 *      在选择要保留区间时，区间的结尾十分重要：选择的区间结尾越小，余留给其它区间的空间就越大，就越能保留更多的区间。
 *      因此，我们采取的贪心策略为，优先保留结尾小且不相交的区间。
 *      具体实现方法为，先把区间按照结尾的大小进行增序排序，每次选择结尾最小且和前一个选择的区间不重叠的区间。
 *      在样例中，排序后的数组为 [[1,2], [1,3], [2,4]]。
 *      按照我们的贪心策略，首先初始化为区间[1,2]；
 *      由于 [1,3] 与 [1,2] 相交，我们跳过该区间；
 *      由于 [2,4] 与 [1,2] 不相交，我们将其保留。
 *      因此最终保留的区间为 [[1,2], [2,4]]。
 */
package main

import (
	"fmt"
	"sort"
)

type byEnd [][]int

func (nums byEnd) Len() int {
	return len(nums)
}

func (nums byEnd) Swap(i, j int) {
	nums[i], nums[j] = nums[j], nums[i]
}

func (nums byEnd) Less(i, j int) bool {
	return nums[i][len(nums[i])-1] < nums[j][len(nums[j])-1]
}

type Test struct {
	areas  [][]int
	result int
}

func f1(areas [][]int) int {
	sort.Sort(byEnd(areas))
	result := 0
	pre := areas[0][1]
	for i := 1; i < len(areas); i++ {
		if areas[i][0] < pre {
			result++
		} else {
			pre = areas[i][1]
		}
	}
	return result
}

func main() {
	tests := []Test{
		{areas: [][]int{{1, 2}, {2, 3}, {3, 4}, {1, 3}}, result: 1},
		{areas: [][]int{{1, 2}, {1, 2}, {1, 2}}, result: 2},
		{areas: [][]int{{1, 2}, {2, 3}}, result: 0},
	}
	for _, test := range tests {
		fmt.Println(f1(test.areas) == test.result)
	}
}
