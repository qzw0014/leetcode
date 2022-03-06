/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const result = new Array(nums.length);
    let right = 1;
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            result[i] = 1;
        }
        else {
            result[i] = result[i - 1] * nums[i - 1]; 
        }
    }
    for (let i = nums.length - 2; i >= 0; i--) {
        right = right * nums[i + 1];
        result[i] = result[i] * right;
    }
    return result;
};

productExceptSelf([1,2,3,4])