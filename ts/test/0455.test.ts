import { describe } from 'mocha';
import { assert } from 'chai';
import { f1 } from '../0455';

describe("0455 test", () => {
    const tests = [
        { g: [1, 2, 3], s: [1, 1], result: 1 },
        { g: [1, 2], s: [1, 2, 3], result: 2 },
    ];

    it('0455 f1 test', () => {
        tests.forEach(test => assert.equal(f1(test.g, test.s), test.result))
    });
});
