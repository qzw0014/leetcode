/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let x = 0, y = nums.length - 1;
    while (x <= y) {
        mid = parseInt((x + y) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        else if (nums[mid] > target) {
            y = mid - 1;
        }
        else {
            x = mid + 1;
        }
    }
    return -1;
};