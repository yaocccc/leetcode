/*
 *  简单 整数反转
 *  给你一个 32 位的有符号整数 x ，返回 x 中每位上的数字反转后的结果。
 *  如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
 */
package main

import "fmt"

type Test struct {
	x, result int
}

func f1(x int) (result int) {
	const (
		MAX = 1<<31 - 1
		MIN = -(1 << 31)
	)
	for x != 0 {
		result = result*10 + x%10
		if result < MIN || result > MAX {
			return 0
		}
		x /= 10
	}
	return
}

func main() {
	tests := []Test{
		{x: 123, result: 321},
		{x: -123, result: -321},
		{x: 120, result: 21},
		{x: 0, result: 0},
	}
	for _, test := range tests {
		fmt.Println(f1(test.x) == test.result)
	}
}
