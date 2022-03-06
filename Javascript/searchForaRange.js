/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    if (nums === null || nums.length === 0) {
        return [-1, -1];
    }
    const result = [-1, -1];
    result[0] = search(nums, target, true);
    result[1] = search(nums, target, false);
    return result;
    
};

var search = function (nums, target, findStartIndex) {
    let ans = -1, left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] > target) {
            right = mid - 1;
        }
        else if (nums[mid] < target) {
            left = mid + 1;
        }
        else {
            ans = mid;
            if (findStartIndex) {
                right = mid - 1;
            }
            else {
                left = mid + 1;
            }
        }
    }
    return ans;
}

//searchRange([1,2,3,3,3,3,4,5,9], 3);