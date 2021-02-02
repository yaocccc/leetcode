import { describe } from 'mocha';
import { assert } from 'chai';
import { f1 } from '../0888';

describe("0888 test", () => {
    const tests = [
        { A: [1, 1], B: [2, 2], result: [1, 2] },
        { A: [1, 2], B: [2, 3], result: [1, 2] },
        { A: [2], B: [1, 3], result: [2, 3] },
        { A: [1, 2, 5], B: [2, 4], result: [5, 4] },
    ];

    it('0888 f1 test', () => {
        tests.forEach(test => assert.equal(f1(test.A, test.B).toString(), test.result.toString()));
    });
});
