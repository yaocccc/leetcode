/*
 *  中等 最长回文子串
 *  给你一个字符串 s，找到 s 中最长的回文子串。
 */
package main

import "fmt"

type Test struct {
	s      string
	result string
}

func f1(s string) string {
	if len(s) < 2 {
		return s
	}
	result := ""
	for i := 0; i < len(s); i++ {
		for j := i + len(result); j <= len(s); j++ {
			l, r := 0, len(s[i:j])-1
			ok := true
			for l < r {
				if s[i:j][l] != s[i:j][r] {
					ok = false
					break
				} else {
					l++
					r--
				}
			}
			if ok {
				result = s[i:j]
			}
		}
	}
	return result
}

func main() {
	tests := []Test{
		{s: "babad", result: "aba"},
		{s: "cbbd", result: "bb"},
		{s: "a", result: "a"},
		{s: "ac", result: "c"},
	}
	for _, test := range tests {
		fmt.Println(f1(test.s) == test.result)
	}
}
