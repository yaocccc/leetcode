/* 
 *  简单 两数之和
 *  给定nums target
 *  从nums中找出两者相加 == target 的索引值
 */
const f1 = (nums: number[], target: number): number[] => {
    const numIndexMap: Map<number, number> = new Map();
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (numIndexMap.has(diff)) return [i, numIndexMap.get(diff)!];
        numIndexMap.set(nums[i], i);
    }
    return [];
}

export {
    f1
};
