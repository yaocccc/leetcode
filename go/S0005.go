package main

import "fmt"

func longestPalindrome(s string) string {
	if len(s) < 2 {
		return s
	}
	var result string = ""
	for i := 0; i < len(s); i++ {
		for j := i + len(result); j <= len(s); j++ {
			l := 0
			r := len(s[i:j]) - 1
			ok := true
			for true {
				if l >= r {
					break
				}
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
    fmt.Println(longestPalindrome("babad"))
}
