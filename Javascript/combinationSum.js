/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    candidates.sort((a, b) => a - b);
    const result = [], combine = [];
    generator(candidates, target, result, combine, 0);
    return result;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number[][]} result
 * @param {number[]} combine
 */
let generator = function(nums, target, result, combine, index) {
    if (target === 0) {
        result.push([...combine]);
        return;
    }
    for (let i = index; i < nums.length; i++) {
        if (target - nums[i] >= 0) {
            combine.push(nums[i]);
            generator(nums, target - nums[i], result, combine, i);
            combine.pop();
        }
    }
}

combinationSum([2,3,6,7],7)