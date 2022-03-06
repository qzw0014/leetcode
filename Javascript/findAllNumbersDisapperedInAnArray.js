/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] != nums[nums[i] - 1]) {
            let tmp = nums[i];
            nums[i] = nums[tmp - 1];
            nums[tmp - 1] = tmp; 
        }
    }
    let result = [];
    nums.forEach((it, index) => {
        if (it != (index + 1)) {
            result.push(index + 1);
        }
    });
    return result;
};

let nums = [0];
console.log(findDisappearedNumbers(nums));