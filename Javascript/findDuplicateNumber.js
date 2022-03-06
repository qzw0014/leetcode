/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let f = nums[0];
    let s = nums[0];
    do {
        f = nums[nums[f]];
        s = nums[s];
    } while(f != s)

    f = nums[0];
    while(f != s) {
        f = nums[f];
        s = nums[s];
    }
    return f;
};