/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let max = nums[0];
    let subSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (subSum + nums[i] > nums[i]) {
            subSum =  nums[i] + subSum
        }
        else {
            subSum = nums[i]
        }
        if (subSum > max) {
            max =  subSum
        }
    }
    return max
};