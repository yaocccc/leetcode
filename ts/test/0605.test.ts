import { describe } from 'mocha';
import { assert } from 'chai';
import { f1 } from '../0605';

describe("0605 test", () => {
    const tests = [
        { flowerbed: [1, 0, 0, 0, 1], n: 1, result: true },
        { flowerbed: [1, 0, 0, 0, 1], n: 2, result: false },
        { flowerbed: [0, 0, 1, 0, 1], n: 1, result: true },
        { flowerbed: [0, 0, 0, 0, 1, 0, 1], n: 0, result: true },
    ];


    it('0605 f1 test', () => {
        tests.forEach(test => assert.equal(f1(test.flowerbed, test.n), test.result))
    });
});
