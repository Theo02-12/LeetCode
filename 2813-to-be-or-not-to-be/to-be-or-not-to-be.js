/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    const object = {
        toBe(value) {
            if (val === value) return true
            else throw Error('Not Equal')
        },
        notToBe(value) {
            if (val !== value) return true
            else throw Error("Equal")
        }
    }
    return object
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */