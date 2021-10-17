/*
 *  中等 无重复字符的最长子串
 *  给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 */
package main

import "fmt"

type Test struct {
	s      string
	result int
}

func f1(s string) int {
	str := ""
	result := 0
	indexOf := func(s string, key byte) int {
		for i := 0; i < len(s); i++ {
			if s[i] == key {
				return i
			}
		}
		return -1
	}

	for i := 0; i < len(s); i++ {
		index := indexOf(str, s[i])
		if index == -1 {
			str += string(s[i])
			if len(str) > result {
				result = len(str)
			}
		} else {
			str = str[index+1:]
			str += string(s[i])
		}
	}
	return result
}

func main() {
	tests := []Test{
		{s: "", result: 0},
		{s: "bbbbb", result: 1},
		{s: "abcabcbb", result: 3},
	}
	for _, test := range tests {
		fmt.Println(f1(test.s) == test.result)
	}
}
