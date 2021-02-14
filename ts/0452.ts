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

const tests = [
    {points: [[10, 16], [2, 8], [1, 6], [7, 12]], result: 2},
    {points: [[1, 2], [3, 4], [5, 6], [7, 8]], result: 4},
    {points: [[1, 2], [2, 3], [3, 4], [4, 5]], result: 2},
    {points: [[1, 2]], result: 1},
    {points: [[2, 3], [2, 3]], result: 1},
];

import { assert } from './test';
console.log(
    tests.every(test => assert(f1(test.points), test.result))
);
