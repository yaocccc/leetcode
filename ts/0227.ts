/* 
 *  中等 基本计算器II
 *  给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。
 *  整数除法仅保留整数部分。
 */
const f1 = (s: string): number => {
    s = s.trim();
    const stack = new Array();
    let preSign = '+';
    let num = 0;
    const n = s.length;
    for (let i = 0; i < n; ++i) {
        if (!isNaN(Number(s[i])) && s[i] !== ' ') {
            num = num * 10 + s[i].charCodeAt(0) - '0'.charCodeAt(0);
        }
        if (isNaN(Number(s[i])) || i === n - 1) {
            switch (preSign) {
                case '+': stack.push(num); break;
                case '-': stack.push(-num); break;
                case '*': stack.push(stack.pop() * num); break;
                default: stack.push(stack.pop() / num | 0);
            }
            preSign = s[i];
            num = 0;
        }
    }
    return stack.reduce((sum, num) => sum + num);
};

console.log(f1("1+2"))
