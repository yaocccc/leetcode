package main

import "fmt"

func twoSum(nums []int, target int) []int {
    var numsMap map[int]int
    numsMap = make(map[int]int)

    for i := 0; i < len(nums); i++ {
        diff := target - nums[i]
        index, ok := numsMap[diff]
        if (ok) {
            return []int {i, index}
        }
        numsMap[nums[i]] = i
    }
    return nums
}

func main() {
    fmt.Println(twoSum([]int {2, 7, 11, 15}, 9))
}
