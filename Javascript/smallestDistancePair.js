/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function (nums, k) {
    nums.sort();
    let lo = 0, hi = nums[nums.length - 1];
    while (lo < hi) {
        let mid = Math.floor((lo + hi) / 2);
        let count = 0, left = 0;
        for (let right = 0; right < nums.length; right++) {
            while (nums[right] - nums[left] > mid) {
                left++;
            }
            count += right - left;
        }
        if (count >= k) {
            hi = mid;
        }
        else {
            lo = mid + 1;
        }
    }
    return lo;
};