/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 1) {
        return nums[0]
    }
    let dp2 = nums[0], dp1 = Math.max(nums[0], nums[1]), dp = dp1;
    for (let i = 2; i < nums.length; i++) {
        dp = Math.max(dp1, dp2 + nums[i])
        dp2 = dp1;
        dp1 = dp;
    }
    return dp;
};

