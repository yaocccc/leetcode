/*
 *  中等 字符串转换整数 (atoi)
 *  函数 myAtoi(string s) 的算法如下：
 *  读入字符串并丢弃无用的前导空格
 *  检查第一个字符（假设还未到字符末尾）为正还是负号，读取该字符（如果有）。 确定最终结果是负数还是正数。 如果两者都不存在，则假定结果为正。
 *  读入下一个字符，直到到达下一个非数字字符或到达输入的结尾。字符串的其余部分将被忽略。
 *  将前面步骤读入的这些数字转换为整数（即，"123" -> 123， "0032" -> 32）。如果没有读入数字，则整数为 0 。必要时更改符号（从步骤 2 开始）。
 *  如果整数数超过 32 位有符号整数范围 [−231,  231 − 1] ，需要截断这个整数，使其保持在这个范围内。具体来说，小于 −231 的整数应该被固定为 −231 ，大于 231 − 1 的整数应该被固定为 231 − 1 。
 *  返回整数作为最终结果。
 *  注意：
 *  本题中的空白字符只包括空格字符 ' ' 。
 *  除前导空格或数字后的其余字符串外，请勿忽略 任何其他字符。
 */
package main

import (
	"fmt"
	"math"
	"strings"
)

type Test struct {
	s      string
	result int
}

func f1(s string) int {
	s = strings.TrimSpace(s)
	result := 0
	sign := 1

	for i, v := range s {
		if v >= '0' && v <= '9' {
			result = result*10 + int(v-'0')
		} else if v == '-' && i == 0 {
			sign = -1
		} else if v == '+' && i == 0 {
			sign = 1
		} else {
			break
		}
		if result > math.MaxInt32 {
			if sign == -1 {
				return math.MinInt32
			}
			return math.MaxInt32
		}
	}

	return sign * result
}

func main() {
	tests := []Test{
		{s: "42", result: 42},
		{s: "   -42", result: -42},
		{s: "4193 with words", result: 4193},
		{s: "words and 987", result: 0},
		{s: "-91283472332", result: -2147483648},
	}

	for _, test := range tests {
		fmt.Println(f1(test.s) == test.result)
	}
}
