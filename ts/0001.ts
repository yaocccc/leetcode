function twoSum(nums: number[], target: number): number[] {
    const numsMap: Map<number, number> = new Map();
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (numsMap.has(diff)) return [i, numsMap.get(diff)!];
        numsMap.set(nums[i], i);
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
