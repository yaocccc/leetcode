/*
 *  简单 最长公共前缀
 *  编写一个函数来查找字符串数组中的最长公共前缀。
 *  如果不存在公共前缀，返回空字符串 ""。
 */
package main

import "fmt"

type Test struct {
	strs   []string
	result string
}

func f1(strs []string) (result string) {
	if len(strs) == 0 {
		return
	}
	minlen := len(strs[0])
	for _, str := range strs {
		if len(str) < minlen {
			minlen = len(str)
		}
	}
	for i := 0; i < minlen; i++ {
		target := strs[0][i]
		for j := 1; j < len(strs); j++ {
			if strs[j][i] != target {
				return
			}
		}
		result += string(target)
	}
	return
}

func main() {
	tests := []Test{
		{[]string{"flower", "flow", "flight"}, "fl"},
		{[]string{"dog", "racecar", "car"}, ""},
	}
	for _, test := range tests {
		fmt.Println(f1(test.strs) == test.result)
	}
}
