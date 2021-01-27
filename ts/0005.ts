/*
 *  中等 最长回文子串
 *  给你一个字符串 s，找到 s 中最长的回文子串。
 */
const f1 = (s: string): string => {
    if (s.length < 2) return s;
    let result = '';

    for (let i = 0; i < s.length; i++)
        for (let j = i + result.length; j <= s.length; j++)
            palindRome(s.slice(i, j));
    return result;

    function palindRome(str: string) {
        let l = 0,
            r = str.length - 1;
        while (l < r) {
            if (str[l] != str[r]) return;
            else l++, r--;
        }
        result = str;
    };
};

export {
    f1
}
