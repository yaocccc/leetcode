/* 
 *  给定一个整数数组，求其中数量大于 1 / 2 的数
 *  思路: 众数大于一般，所以有且只有一个
 *  从0开始遍历，将0号num放入一个list，若1号不等于0号，则两两抵消
 *  若相同，则往list上加1,
 *  当list为空时，取接下来的那个数为首
 *  直到最终，剩下的数即为众数
 */
function getNumMoreHalf(nums: number[]): number {
    if (nums.length <= 1) return nums[0];
    let major = nums[0],
        count = 1,
        len = nums.length;
    for (let i = 1; i < len; i++) {
        if (nums[i] !== major) {
            count--;
            if (i + 1 < len && count < 1) {
                major = nums[i + 1];
            }
        } else count++;
    }
    if (count == 0) return -1;
    return major;
}

console.log(getNumMoreHalf([1, 1, 2, 2, 1, 2, 2]));

// TODO 如果是 1 / n 该如何实现
