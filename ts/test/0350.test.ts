import { describe } from 'mocha';
import { arrEqual } from './utils';
import { f1 } from '../0350';

describe("0350 test", () => {
    const tests = [
        { nums1: [1, 2, 2, 1], nums2: [2, 2], result: [2, 2] },
        { nums1: [4, 9, 5], nums2: [9, 4, 9, 8, 4], result: [4, 9] }
    ];

    it('0350 f1 test', () => {
        tests.forEach(test => arrEqual(f1(test.nums1, test.nums2), test.result))
    });
});
