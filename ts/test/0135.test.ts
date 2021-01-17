import { describe } from 'mocha';
import { assert } from 'chai';
import { f1 } from '../0135';

describe("0135 test", () => {
    const tests = [
        { ratings: [1, 0, 2], result: 5 },
        { ratings: [1, 2, 2], result: 4 },
        { ratings: [1,2,87,87,87,2,1], result: 13}
    ];

    it('0135 f1 test', () => {
        tests.forEach(test => assert.equal(f1(test.ratings), test.result))
    });
});
