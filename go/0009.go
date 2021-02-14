/*
 *  简单 回文数
 *  给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
 *  回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。
 */
package main

import "fmt"

type Test struct {
	x      int
	result bool
}

func f1(x int) bool {
	temp := fmt.Sprintf("%d", x)
	l := 0
	r := len(temp) - 1
	for l < r {
		if temp[l] != temp[r] {
			return false
		}
		l++
		r--
	}
	return true
}

func main() {
	tests := []Test{
		{x: 121, result: true},
		{x: -121, result: false},
		{x: 10, result: false},
		{x: -101, result: false},
	}
	for _, test := range tests {
		fmt.Println(f1(test.x) == test.result)
	}
}
