import { describe } from 'mocha';
import { assert } from 'chai';
import { f1 } from '../0014';

describe("0014 test", () => {
    const tests = [
		{strs: ["flower","flow","flight"], result: "fl"},
		{strs: ["dog","racecar","car"], numRows: 4, result: ""},
    ];

    it('0014 f1 test', () => {
        tests.forEach(test => assert.equal(f1(test.strs), test.result));
    });
});
