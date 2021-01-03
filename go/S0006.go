package main

import "fmt"
import "strings"

func convert(s string, numRows int) string {
    if numRows == 1 {
        return s
    }
    resultArr := make([]string, numRows)
    n := 2 * numRows - 2
    for i, char := range s {
        x := i % n
        resultArr[min(x, n - x)] += string(char)
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
    fmt.Println(convert("LEETCODEISHIRING", 3))
}
