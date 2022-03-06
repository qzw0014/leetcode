/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
    let start = 0;
    let end = 0;
    for (let i = 0; i < nums.length; i++) {
        start = Math.max(start, nums[i]);
        end += nums[i];
    }
    while (start < end) {
        let mid = start + Math.floor((end - start) / 2);
        let sum = 0;
        let pisces = 1;
        for (let num in nums) {
            if (sum + nums[num] > mid) {
                sum = nums[num];
                pisces++;
            }
            else {
                sum += nums[num];
            }
        }
        if (pisces > m) {
            start = mid + 1;
        }
        else {
            end = mid;
        }
    }
    return end;
};