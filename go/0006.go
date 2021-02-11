/*
 *  中等 Z字形变换
 *  将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
 *
 *  比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：
 *  P   A   H   N
 *  A P L S I I G
 *  Y   I   R
 *  之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。
 */
package main

import (
	"fmt"
	"strings"
)

type Test struct {
	s       string
	numRows int
	result  string
}

func f1(s string, numRows int) string {
	if numRows == 1 {
		return s
	}
	resultArr := make([]string, numRows)
	n := 2*numRows - 2
	for i, char := range s {
		x := i % n
		resultArr[min(x, n-x)] += string(char)
	}
	return strings.Join(resultArr, "")
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func main() {
	tests := []Test{
		{"PAYPALISHIRING", 3, "PAHNAPLSIIGYIR"},
		{"PAYPALISHIRING", 4, "PINALSIGYAHRPI"},
		{"A", 1, "A"},
	}
	for _, test := range tests {
		fmt.Println(f1(test.s, test.numRows) == test.result)
	}
}
