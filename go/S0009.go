package main

import "fmt"

func isPalindrome(x int) bool {
    if x < 0 {
        return false
    }
    origin := x
    redirect := 0
    for x != 0 {
        redirect = redirect*10 + x%10
        x /= 10
    }
    return origin == redirect
}

func main() {
    fmt.Println(isPalindrome(12321))
}
