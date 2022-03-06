/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    let start = 0, end = nums.length - 1;
    if (nums[start] > nums[end]) {
        while(start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (nums[mid] > nums[mid + 1]) {
                return nums[mid + 1];
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
        return nums[0];
    }
}