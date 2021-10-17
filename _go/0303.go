/*
 *  简单 区域和检索-数组不可变
 *  给定一个整数数组  nums，求出数组从索引 i 到 j（i ≤ j）范围内元素的总和，包含 i、j 两点。
 *  实现 NumArray 类：
 *  NumArray(int[] nums) 使用数组 nums 初始化对象
 *  int sumRange(int i, int j) 返回数组 nums 从索引 i 到 j（i ≤ j）范围内元素的总和，包含 i、j 两点（也就是 sum(nums[i], nums[i + 1], ... , nums[j])）
 */
package main

type NumArray struct {
	sums []int
}

func Constructor(nums []int) NumArray {
	numArray := NumArray{
		sums: make([]int, len(nums)),
	}
	if len(nums) == 0 {
		return numArray
	}
	numArray.sums[0] = nums[0]
	for i := 1; i < len(nums); i++ {
		numArray.sums[i] = numArray.sums[i-1] + nums[i]
	}
	return numArray
}

func (this *NumArray) SumRange(i int, j int) int {
	if i == 0 {
		return this.sums[j]
	}
	return this.sums[j] - this.sums[i-1]
}
