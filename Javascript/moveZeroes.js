/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    if (nums.length === 1) {
        return;
    }
    let replaceIndex = null;
    nums.forEach((it, index) => {
        if (it === 0) {
            if (replaceIndex === null) {
                replaceIndex = index;
            }
        }
        else {
            if (replaceIndex != null) {
                nums[replaceIndex] = it;
                replaceIndex++;
                nums[index] = 0
            }
        }
    });
};

let nums = [0,0,1];
moveZeroes(nums)
console.log(nums);