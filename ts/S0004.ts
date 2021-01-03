function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let result: number[] = [], len = nums1.length + nums2.length;
    while (nums1.length && nums2.length)
        result.push(nums1[0] < nums2[0] ? nums1.shift()! : nums2.shift()!);
    result = [...result, ...nums1, ...nums2];
    return len % 2 ? result[len >> 1] : (result[(len - 1) >> 1] + result[len >> 1]) / 2;
};
