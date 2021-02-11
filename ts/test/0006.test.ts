import { describe } from 'mocha';
import { assert } from 'chai';
import { f1 } from '../0006';

describe("0006 test", () => {
    const tests = [
		{s: "PAYPALISHIRING", numRows: 3, result: "PAHNAPLSIIGYIR"},
		{s: "PAYPALISHIRING", numRows: 4, result: "PINALSIGYAHRPI"},
		{s: "A", numRows: 1, result: "A"},
    ];

    it('0006 f1 test', () => {
        tests.forEach(test => assert.equal(f1(test.s, test.numRows), test.result));
    });
});
