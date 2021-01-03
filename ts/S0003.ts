function lengthOfLongestSubstring(s: string): number {
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

console.log(lengthOfLongestSubstring("abcabc"));
