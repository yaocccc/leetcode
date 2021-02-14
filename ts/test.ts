const assert = (x1: any, x2: any): boolean => {
    if (x1 instanceof Array) {
        return x1.sort().toString() === x2.sort().toString();
    }
    return x1 === x2;
};

export {
    assert
};
