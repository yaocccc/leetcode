/*
 *  中等 无重复字符的最长子串
 *  给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 */
const f1 = (s: string): number => {
    let str = '', result = 0;
    for (let i = 0; i < s.length; i++) {
        const index = str.indexOf(s[i]);
        if (index === -1) {
            str += s[i];
            result = Math.max(result, str.length);
        } else {
            str = str.slice(index + 1);
            str += s[i];
        }
    }
    return result;
};

export {
    f1
}
