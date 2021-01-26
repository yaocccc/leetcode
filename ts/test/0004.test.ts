import { describe } from 'mocha';
import { assert } from 'chai';
import { f1 } from '../0004';

describe("0004 test", () => {
    const tests = [
        { nums1: [1, 3], nums2: [2], result: 2.0 },
        { nums1: [1, 2], nums2: [3, 4], result: 2.5 },
        { nums1: [0, 0], nums2: [0, 0], result: 0 },
        { nums1: [], nums2: [1], result: 1.0 },
        { nums1: [2], nums2: [], result: 2.0 }
    ];

    it('0004 f1 test', () => {
        tests.forEach(test => assert.equal(f1(test.nums1, test.nums2), test.result));
    });
});
