/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let jumpNum = nextJump(nums, 0, 0);
    return jumpNum;
};

/**
 * @param {number[]} nums
 * @param {number} index
 * @param {number} jumps
 * @return {number}
 */
let nextJump = function(nums, index, jumps) {
    if (index >= nums.length - 1) {
        return jumps;
    }
    if (nums[index] === 0) {
        return jumps;
    }
    let maxJump = 0;
    let nextIndex = 0;
    for (let i = 1; i <= nums[index]; i++) {
        const nextDes = index + i;
        if (nextDes >= nums.length - 1) {
            nextIndex = nextDes;
            break;
        }
        const reach = index + i + nums[nextDes];
        if (reach > maxJump) {
            maxJump = reach;
            nextIndex = i + index;
        }
    }
    return nextJump(nums, nextIndex, jumps + 1);
}