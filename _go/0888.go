/*
 *  简单 公平的糖果棒交换
 *  爱丽丝和鲍勃有不同大小的糖果棒：A[i] 是爱丽丝拥有的第 i 根糖果棒的大小，B[j] 是鲍勃拥有的第 j 根糖果棒的大小。
 *  因为他们是朋友，所以他们想交换一根糖果棒，这样交换后，他们都有相同的糖果总量。（一个人拥有的糖果总量是他们拥有的糖果棒大小的总和。）
 *  返回一个整数数组 ans，其中 ans[0] 是爱丽丝必须交换的糖果棒的大小，ans[1] 是 Bob 必须交换的糖果棒的大小。
 */
package main

import (
	"fmt"
	"reflect"
)

type Test struct {
	A, B, result []int
}

func f1(A, B []int) (result []int) {
	sumA := 0
	setA := map[int]struct{}{}
	for _, v := range A {
		sumA += v
		setA[v] = struct{}{}
	}
	sumB := 0
	for _, v := range B {
		sumB += v
	}
	delta := (sumA - sumB) / 2
	for i := 0; ; i++ {
		y := B[i]
		x := y + delta
		if _, has := setA[x]; has {
			return []int{x, y}
		}
	}
}

func main() {
	tests := []Test{
		{A: []int{1, 1}, B: []int{2, 2}, result: []int{1, 2}},
		{A: []int{1, 2}, B: []int{2, 3}, result: []int{1, 2}},
		{A: []int{2}, B: []int{1, 3}, result: []int{2, 3}},
		{A: []int{1, 2, 5}, B: []int{2, 4}, result: []int{5, 4}},
	}

	for _, test := range tests {
		fmt.Println(reflect.DeepEqual(f1(test.A, test.B), test.result))
	}
}
