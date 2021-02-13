/* 
 *  简单 找到数组中消失的数字
 *  给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。
 *  找到所有在 [1, n] 范围之间没有出现在数组中的数字。
 *  您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。
 */
const f1 = (nums: number[]): number[] => {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1;
        nums[index] = -Math.abs(nums[index]);
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0)
            result.push(i + 1);
    }
    return result;
};

const f2 = (nums: number[]): number[] => {
    const numsSet = new Set(nums);
    const result = [];
    for (let i = 1; i <= nums.length; i++) {
        if (!numsSet.has(i))
            result.push(i);
    }
    return result;
};

export {
    f1,
    f2
}
