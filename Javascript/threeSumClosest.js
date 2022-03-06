/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let diff = Number.MAX_VALUE;
    nums.sort((a, b) => {
        return a - b;
    });
    for (let i = 0; i < nums.length && diff != 0; i++) {
        let j = i + 1, k = nums.length - 1;
        while(j < k) {
            const sum = nums[j] + nums[k] + nums[i];
            if (Math.abs(target - sum) < Math.abs(diff)) {
               diff = target - sum;
            }
            else if (sum > target) {
                k--;
            }
            else {
                j++;
            }
        }
    }
    return target - diff;
};