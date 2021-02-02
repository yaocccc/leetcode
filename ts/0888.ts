/* 
 *  简单 公平的糖果棒交换
 *  爱丽丝和鲍勃有不同大小的糖果棒：A[i] 是爱丽丝拥有的第 i 根糖果棒的大小，B[j] 是鲍勃拥有的第 j 根糖果棒的大小。
 *  因为他们是朋友，所以他们想交换一根糖果棒，这样交换后，他们都有相同的糖果总量。（一个人拥有的糖果总量是他们拥有的糖果棒大小的总和。）
 *  返回一个整数数组 ans，其中 ans[0] 是爱丽丝必须交换的糖果棒的大小，ans[1] 是 Bob 必须交换的糖果棒的大小。
 */
const f1 = (A: number[], B: number[]): number[] => {
    const diff = B.reduce((sum, num) => sum + num) - A.reduce((sum, num) => sum + num);
    const BSet = new Set(B);
    for (let i = 0; i < A.length; i++) {
        const target = diff / 2 + A[i];
        if (BSet.has(target))
            return [A[i], target];
    }
};

export {
    f1
}
