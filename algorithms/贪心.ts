/* 
 *  贪心算法采用贪心策略，保证每次操作都是**局部最优解**，从而使最后得到的结果是**全局最优**的。
 */

/* 
 *  E1: 455
 *  题目描述
 *      有一群孩子和一堆饼干，每个孩子有一个饥饿度，每个饼干都有一个大小。
 *      每个孩子只能吃最多一个饼干，且只有饼干的大小大于孩子的饥饿度时，这个孩子才能吃饱。
 *      求解最多有多少孩子可以吃饱。
 *  输入输出样例
 *      输入两个数组，分别代表孩子的饥饿度和饼干的大小。输出最多有多少孩子可以吃饱的数量。
 *      Input: [1,2], [1,2,3] Output: 2
 *      在这个样例中，我们可以给两个孩子喂 [1,2]、 [1,3]、 [2,3] 这三种组合的任意一种。
 *  题解 
 *      因为饥饿度最小的孩子最容易吃饱，所以我们先考虑这个孩子。
 *      为了尽量使得剩下的饼干可以满足饥饿度更大的孩子，所以我们应该把大于等于这个孩子饥饿度的、且大小最小的饼干给这个孩子。
 *      满足了这个孩子之后，我们采取同样的策略，考虑剩下孩子里饥饿度最小的孩子，直到没有满足条件的饼干存在。
 */
function E1(children: number[], cookies: number[]): number {
    children.sort((a, b) => a - b);
    cookies.sort((a, b) => a - b);
    let child = 0, cookie = 0;
    while (child < children.length && cookie < cookies.length) {
        if (children[child] <= cookies[cookie]) child++;
        cookie++
    }
    return cookie;
};

const E1_1 = [1, 2], E1_2 = [1, 2, 3];
console.log('E1', E1_1, E1_2, E1(E1_1, E1_2));

/* 
 *  E2: 135
 *  题目描述
 *      一群孩子站成一排，每一个孩子有自己的评分。现在需要给这些孩子发糖果，规则是如果一
 *      个孩子的评分比自己身旁的一个孩子要高，那么这个孩子就必须得到比身旁孩子更多的糖果；所
 *      有孩子至少要有一个糖果。求解最少需要多少个糖果。
 *  输入输出样例
 *      输入是一个数组，表示孩子的评分。输出是最少糖果的数量。
 *      Input: [1,0,2] Output: 5
 *      在这个样例中，最少的糖果分法是 [2,1,2]。
 *  题解
 *      为每一个孩子分配一颗糖。
 *      从左开始比，如果右边的孩子比左边高，就给右边的孩子加上一颗。
 *      从右开始比，如果左边孩子的评分比右边的高，且左边孩子当前的糖果数不大于右边孩子的糖果数，则左边孩子的糖果数更新为右边孩子的糖果数加 1。
 *      这里的贪心策略即为，在每次遍历中，只考虑并更新相邻一侧的大小关系。
 */
function E2(children: number[]): number {
    if (children.length < 2)
        return children.length;
    const result = new Array(children.length).fill(1);
    for (let i = 1; i < children.length; i++)
        if (children[i] > children[i - 1])
            result[i] = result[i - 1] + 1;
    for (let i = children.length - 2; i >= 0; i--)
        if (children[i] > children[i + 1] && result[i] <= result[i + 1])
            result[i] = result[i + 1] + 1;
    return result.reduce((sum, one) => sum + one);
};

const E2_1 = [1, 0, 2];
console.log('E2', E2_1, E2(E2_1));

/* 
 *  E3: 435
 *  题目描述
 *      给定多个区间，计算让这些区间互不重叠所需要移除区间的最少个数。起止相连不算重叠。
 *  输入输出样例
 *      输入是一个数组，数组由多个长度固定为 2 的数组组成，表示区间的开始和结尾。输出一个整数，表示需要移除的区间数量。
 *      Input: [[1,2], [2,4], [1,3]] Output: 1
 *  题解
 *      在选择要保留区间时，区间的结尾十分重要：选择的区间结尾越小，余留给其它区间的空间就越大，就越能保留更多的区间。
 *      因此，我们采取的贪心策略为，优先保留结尾小且不相交的区间。
 *      具体实现方法为，先把区间按照结尾的大小进行增序排序，每次选择结尾最小且和前一个选择的区间不重叠的区间。
 *      在样例中，排序后的数组为 [[1,2], [1,3], [2,4]]。
 *      按照我们的贪心策略，首先初始化为区间[1,2]；
 *      由于 [1,3] 与 [1,2] 相交，我们跳过该区间；
 *      由于 [2,4] 与 [1,2] 不相交，我们将其保留。
 *      因此最终保留的区间为 [[1,2], [2,4]]。
 */
function E3(areas: number[][]): number {
    areas.sort((a, b) => a[1] - b[1]);
    let result: number = 0;
    let pre = areas[0][1];
    for (let i = 1; i < areas.length; i++) {
        if (areas[i][0] < pre) result++;
        else pre = areas[i][1];
    }
    return result;
}

const E3_1 = [[1,2], [2,4], [1,3]];
console.log('E3', E3_1, E3(E3_1));
