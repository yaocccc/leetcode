import { describe } from 'mocha';
import { assert } from 'chai';
import { f1 } from '../0435';

describe("0435 test", () => {
    const tests = [
        { areas: [ [1, 2], [2, 3], [3, 4], [1, 3] ], result: 1 },
        { areas: [ [1, 2], [1, 2], [1, 2] ], result: 2 },
        { areas: [ [1, 2], [2, 3] ], result: 0 },
    ];

    it('0435 f1 test', () => {
        tests.forEach(test => assert.equal(f1(test.areas), test.result))
    });
});
