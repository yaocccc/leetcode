const f1 = (points: number[][]): number => {
    if (!points.length) return 0;
    points.sort((a, b) => a[1] - b[1]);
    let count = 1;
    let right = points[0][1];
    for (let i = 1; i < points.length; i++) {
        if (right < points[i][0]) {
            count++;
            right = points[i][1];
        }
    }
    return count;
};

export {
    f1
};
