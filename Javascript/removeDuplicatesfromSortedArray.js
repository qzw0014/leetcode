/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let replaceIndex = null;
    if (nums.length < 2) {
        return nums.length;
    }
    for (let index = 1; index < nums.length; index++) {
        if (nums[index] === nums[index - 1]) {
            if (!replaceIndex) {
                replaceIndex = index;
            }
        }
        else {
            if(replaceIndex) {
                nums[replaceIndex] = nums[index];
                replaceIndex++;
            }
        }
    }
    if (replaceIndex) {
        return replaceIndex;
    }
    else {
        return nums.length;
    }
};

let nums = [0,1,2,2,3,4];
nums = [0,0,1,1,1,2,2,2,3,3,4];
nums = [1,1,2];
console.log(removeDuplicates(nums));
console.log(nums);