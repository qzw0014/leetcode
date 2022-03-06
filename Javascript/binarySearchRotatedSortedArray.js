/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let start, end, mid;
    mid = findK(nums);
    if (mid === -1) {
        start = 0;
        end = nums.length - 1;
    }
    else {
        if (nums[0] === target) {
            return 0;
        }
        else if (nums[0] > target) {
            start = mid + 1;
            end = nums.length - 1;
        }
        else {
            start = 1;
            end = mid;
        }
    }
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            return mid
        }
        else if (nums[mid] > target) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
    return -1;
};

var findK = function(nums) {
    let start = 0, end = nums.length - 1;
    if (nums[start] > nums[end]) {
        while(start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (nums[mid] > nums[mid + 1]) {
                return mid;
            }
            else {
                if (nums[start] > nums[mid]) {
                    end = mid - 1;
                }
                else {
                    start = mid + 1;
                }
            }
        }
    }
    else {
        return -1;
    }
}