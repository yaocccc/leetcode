function myAtoi(s: string): number {
    const MAX = 2 ** 31 - 1;
    const MIN = -(2 ** 31);
    if (Number.isNaN(parseInt(s))) {
        return 0;
    } else {
        let res = parseInt(s);
        return res > MAX ? MAX : res < MIN ? MIN : res;
    }
};

console.log(myAtoi("4193 with words"));
