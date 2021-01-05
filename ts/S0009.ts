function isPalindrome(x: number): boolean {
    const str = String(x);
    let l = 0, r = str.length - 1;
    while (l < r) {
        if (str[l] !== str[r]) return false;
        l++, r--;
    }
    return true;
};

console.log(isPalindrome(-1221))
