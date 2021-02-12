import { describe } from 'mocha';
import { assert } from 'chai';
import { f1, f2 } from '../0007';

describe("0007 test", () => {
    const tests = [
        {x: 123, result: 321},
        {x: -123, result: -321},
        {x: 120, result: 21},
        {x: 0, result: 0},
    ];

    it('0007 f1 test', () => {
        tests.forEach(test => assert.equal(f1(test.x), test.result));
    });

    it('0007 f2 test', () => {
        tests.forEach(test => assert.equal(f2(test.x), test.result));
    });
});
