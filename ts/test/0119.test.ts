import { describe } from 'mocha';
import { f1 } from '../0119';
import { arrEqual } from './utils';

describe("0119 test", () => {
    const tests = [
        { k: 3, result: [1, 3, 3, 1]},
        { k: 4, result: [1, 4, 6, 4, 1]},
        { k: 5, result: [1, 5, 10, 10, 5, 1]},
    ];

    it('0119 f1 test', () => {
        tests.forEach(test => arrEqual(f1(test.k), test.result));
    });
});
