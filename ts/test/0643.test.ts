import { describe } from 'mocha';
import { assert } from 'chai';
import { f1 } from '../0643';

describe("0643 test", () => {
    const tests = [
        { nums: [1, 12, -5, -6, 50, 3], k: 4, result: 12.75 }
    ];

    it('0643 f1 test', () => {
        tests.forEach(test => assert.equal(f1(test.nums, test.k), test.result))
    });
});
