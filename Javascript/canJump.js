/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    return jump(nums, 0);
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
let jump = function(nums, index) {
    if (index >= nums.length - 1) {
        return true;
    }
    if (nums[index] === 0) {
        return false;
    }
    let maxJump = 0;
    let nextJumpLength = 0;
    for (let i = 1; i <= nums[index]; i++) {
        const jumpIndex = nums[index + i] + index + i;
        if (jumpIndex > maxJump) {
            maxJump = jumpIndex;
            nextJumpLength = i;
        }
    }
    return jump(nums, index + nextJumpLength);
}

canJump([2,5,0,0]);