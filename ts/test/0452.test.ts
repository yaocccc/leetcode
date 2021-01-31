import { describe } from 'mocha';
import { assert } from 'chai';
import { f1 } from '../0452';

describe("0452 test", () => {
    const tests = [
		{points: [[10, 16], [2, 8], [1, 6], [7, 12]], result: 2},
		{points: [[1, 2], [3, 4], [5, 6], [7, 8]], result: 4},
		{points: [[1, 2], [2, 3], [3, 4], [4, 5]], result: 2},
		{points: [[1, 2]], result: 1},
		{points: [[2, 3], [2, 3]], result: 1},
    ];

    it('0452 f1 test', () => {
        tests.forEach(test => assert.equal(f1(test.points), test.result))
    });
});
