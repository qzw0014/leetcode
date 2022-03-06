;/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    if (nums.length === 0) {
        return 0;
    }
    let x = 0, y = nums.length - 1, flag = 0;
    let result;
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
    if (x === 0) {
        return 0;
    }
    if (nums[y] > target) {
        return y
    }
    else {
        return x;
    }
};

