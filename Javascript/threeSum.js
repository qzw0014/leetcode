/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let result = []
    nums.sort((a, b) => {
        return a - b;
    });
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            break;
        }
        if (i === 0 || nums[i] != nums[i - 1]) {
            let j = i + 1, k = nums.length - 1;
            while( j < k) {
                const sum = nums[j] + nums[k];
                if (sum === (0 - nums[i])) {
                    result.push([nums[i], nums[j], nums[k]]);
                    j++;
                    k--;
                    while(j < k && nums[j] === nums[j -1]) {
                        j++;
                    }
                }
                else if (sum + nums[i] > 0) {
                    k--;
                }
                else if (sum + nums[i] < 0) {
                    j++;
                }
            }
        }
    }
    return result;
};