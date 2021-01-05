function convert(s: string, numRows: number): string {
    if (numRows === 1) return s;

    let diff: 1 | -1 = -1, line = 0;
    let resultArr = Array(numRows).fill('');
    
    for (let i = 0; i < s.length; i++) {
        resultArr[line] += s[i];
        diff *= line % (numRows - 1) ? 1 : -1;
        line += diff;
    }
    return resultArr.reduce((str, item) => str += item, '');
};

console.log(convert('LEETCODEISHIRING', 3));
