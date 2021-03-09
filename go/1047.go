/*
 *  简单 删除字符串中所有的相邻重复项
 *  在 S 上反复执行重复项删除操作，直到无法继续删除。
 *  在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。
 */
package main

import (
	"fmt"
)

type Test struct {
	S, result string
}

func f1(S string) string {
	for i := 0; i+1 < len(S); {
		if S[i] == S[i+1] {
			S = S[:i] + S[i+2:]
			i--
			if i < 0 {
				i = 0
			}
		} else {
			i++
		}
	}
	return S
}

func f2(S string) string {
	stack := []byte{}
	for i := range S {
		if len(stack) > 0 && stack[len(stack)-1] == S[i] {
			stack = stack[:len(stack)-1]
		} else {
			stack = append(stack, S[i])
		}
	}
	return string(stack)
}

func main() {
	tests := []Test{
		{"abbaca", "ca"},
	}
	for _, test := range tests {
		fmt.Println(f1(test.S) == test.result, f2(test.S) == test.result)
	}
}
