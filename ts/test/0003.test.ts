import { describe } from 'mocha';
import { assert } from 'chai';
import { f1 } from '../0003';

describe("0003 test", () => {
    const tests = [
        { s: '', result: 0 },
        { s: 'bbbbb', result: 1 },
        { s: 'abcabcbb', result: 3 }
    ];

    it('0003 f1 test', () => {
        tests.forEach(test => assert.equal(f1(test.s), test.result));
    });
});
