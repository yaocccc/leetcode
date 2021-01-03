package main

import "fmt"

func indexOf(s string, key byte) int {
	for i := 0; i < len(s); i++ {
		if s[i] == string(key) {
			return i
		}
	}
	return -1
}

func lengthOfLongestSubstring(s string) int {
	str := ""
	result := 0
	for i := 0; i < len(s); i++ {
		index := indexOf(str, s[i])
		if index == -1 {
			str += string(s[i])
			if result < len(str) {
				result = len(str)
			} else {
				str = str[index+1:]
				str += string(s[i])
			}
		}
	}
	return result
}

func main() {
	fmt.Println(lengthOfLongestSubstring("abcabdbb"))
}
