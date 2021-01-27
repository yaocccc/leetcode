import { describe } from 'mocha';
import { assert } from 'chai';
import { f1 } from '../0005';

describe("0005 test", () => {
    const tests = [
		{s: "babad", result: "aba"},
		{s: "cbbd", result: "bb"},
		{s: "a", result: "a"},
		{s: "ac", result: "c"},
    ];

    it('0005 f1 test', () => {
        tests.forEach(test => assert.equal(f1(test.s), test.result));
    });
});
