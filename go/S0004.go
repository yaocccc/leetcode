package main

import "fmt"

func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
	var result []int
	l := len(nums1) + len(nums2)
	for true {
		if len(nums1) == 0 || len(nums2) == 0 {
			break
		}
		if nums1[0] < nums2[0] {
			result = append(result, nums1[0])
			nums1 = nums1[1:]
		} else {
			result = append(result, nums2[0])
			nums2 = nums2[1:]
		}
	}
	result = append(result, nums1...)
	result = append(result, nums2...)

	if l%2 != 0 {
		return float64(result[l/2])
	} else {
		num1 := float64(result[(l-1)/2]) / 2
		num2 := float64(result[l/2]) / 2
		return num1 + num2
	}
}

func main() {
	fmt.Println(findMedianSortedArrays([]int{1, 3}, []int{2}))
}
