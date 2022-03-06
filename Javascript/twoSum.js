/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const arrayMay = new Map();
    for (let i = 0; i< nums.length; i++) {
        arrayMay.set(nums[i], i);
    }      
    for (let i = 0; i < nums.length; i++) {
        let tmp = target - nums[i];
        if (arrayMay.get(tmp) && arrayMay.get(tmp) != i) {
            return [i, arrayMay.get(tmp)]
        }
    }
};