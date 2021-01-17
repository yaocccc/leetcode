import { describe } from 'mocha';
import { arrEqual } from './utils';
import { f1 } from '../0001';

describe("0001 test", () => {
    const tests = [
        { nums: [2, 7, 11, 15], target: 9, result: [0, 1] },
        { nums: [3,2,4], target: 6, result: [1, 2] },
        { nums: [3, 3], target: 6, result: [0, 1] }
    ];

    it('0001 f1 test', () => {
        tests.forEach(test => arrEqual(f1(test.nums, test.target), test.result));
    });
});
