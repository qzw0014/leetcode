/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    if (nums.length === 0 ) {
        return false;
    }
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let midIndex = left + Math.floor((right - left) / 2);
        if (nums[left] < nums[right]) {
            if (nums[midIndex] > target) {
                right = midIndex - 1;
            }
            else if (nums[midIndex] < target) {
                left = midIndex + 1;
            }
            else {
                break;
            }
        }
        else if (nums[left] > nums[right]){
            if (nums[midIndex] > target) {

            }
        }
    }
};