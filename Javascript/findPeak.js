/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    if (nums.length === 1) {
        return 0;
    }
    let left = 0, right = nums.length;
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (mid < nums.length - 1) {
            if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
                return mid;
            }
            else if (nums[mid] < nums[mid + 1]) { // up
                left = mid + 1;
            }
            else{
                right = mid;
            }
        }
        else {
            if (nums[mid] > nums[mid - 1]) {
                return mid;
            }
            else {
                right = mid;
            }
        }
       
    }
    return right;
};

findPeakElement([6,5,4,3,2,3,2])