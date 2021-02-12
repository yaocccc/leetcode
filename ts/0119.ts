/* 
 *  简单 杨辉三角II
 *  在杨辉三角中，每个数是它左上方和右上方的数的和。
 *  1
 *  1 1
 *  1 2 1
 *  1 3 3 1
 */
const f1 = (rowIndex: number): number[] => {
    const result: number[] = new Array(rowIndex + 1).fill(0);
    result[0] = 1;
    for (let i = 0; i < rowIndex; i++)
        for (let j = i + 1; j >= 1; j--)
            result[j] += result[j - 1];
    return result;
};

export {
    f1
}
