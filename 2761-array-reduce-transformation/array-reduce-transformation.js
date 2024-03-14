/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    let final = init
    let test = 0
    for (let i = 0; i < nums.length; i++) {
        final = fn(final, nums[i])
    }
    if (nums.length === 0) return init
    return final


};