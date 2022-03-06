/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    const result = [];
    const combine = [];
    const indexs = new Set();
    const unSet = new Set();
    generate(nums, combine, result, indexs, unSet);
    return result;
};

/**
 * @param {number[]} nums
 * @param {number[]} combine
 * @param {number[][]} result
 * @param {Set} indexs
 * @param {Set} unSet
 */
let generate = function (nums, combine, result, indexs, unSet) {
    if (indexs.size === nums.length) {
        const arrStr = combine.join('');
        if (!unSet.has(arrStr)) {
            result.push([...combine]);
            unSet.add(arrStr);
        }
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        if (!indexs.has(i)) {
            combine.push(nums[i]);
            indexs.add(i);
            generate(nums, combine, result, indexs, unSet);
            indexs.delete(i);
            combine.pop();
        }
    }
}

permuteUnique([1,1,2])