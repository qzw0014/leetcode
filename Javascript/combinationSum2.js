/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b);
    const result = [], combine = [];
    const unSet = new Set();
    generator(candidates, target, result, combine, 0, unSet);
    return result;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number[][]} result
 * @param {number[]} combine
 * @param {Set} unSet
 */
let generator = function (nums, target, result, combine, index, unSet) {
    if (target === 0) {
        const arrStr = combine.join('');
        if (!unSet.has(arrStr)) {
            result.push([...combine]);
            unSet.add(arrStr);
        }
        return;
    }
    let prev = null;
    for (let i = index; i < nums.length && nums[i] <= target; i++) {
        if (target - nums[i] >= 0 && nums[i] !== prev) {
            combine.push(nums[i]);
            generator(nums, target - nums[i], result, combine, i + 1, unSet);
            prev = combine.pop();
        }
    }
}

combinationSum2([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 30)