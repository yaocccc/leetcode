import { expect } from "chai";

const arrEqual = <T>(arr: T[], target: T[]) => {
    expect(arr.sort()).to.deep.equal(target.sort());
};

export {
    arrEqual
};
