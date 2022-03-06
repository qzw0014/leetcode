/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let right = nums.length - 1, left = 0;
    while (right > left) {
        while(nums[left] === 0) {
            left++;
        }
        while(nums[right] === 2) {
            right--;
        }
        if (left >= right) {
            break;
        }
        if (nums[left] > nums[right]) {
            const tmp = nums[left];
            nums[left] = nums[right];
            nums[right] = tmp;
        }
        else if (nums[left] === nums[right]) {
            let tmpIndex = left + 1;
            while (tmpIndex < right) {
                if (nums[left] != nums[tmpIndex]) {
                    tmp = nums[left];
                    nums[left] = nums[tmpIndex];
                    nums[tmpIndex] = tmp;
                    break;
                }
                tmpIndex++;
            }
            if (tmpIndex === right) {
                break;
            }
        }
    }
};