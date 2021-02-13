import { describe } from 'mocha';
import { arrEqual } from './utils';
import { f1, f2 } from '../0448';

describe("0448 test", () => {
    const tests = [
		{nums: [4,3,2,7,8,2,3,1], result: [5, 6]},
    ];

    it('0448 f1 test', () => {
        tests.forEach(test => arrEqual(f1(Array.from(test.nums)), test.result));
    });

    it('0448 f2 test', () => {
        tests.forEach(test => arrEqual(f2(Array.from(test.nums)), test.result));
    });
});
