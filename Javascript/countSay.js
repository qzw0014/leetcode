/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n === 1) {
        return "1";
    }
    let result = [1];
    for (let i = 2; i <= n; i++) {
        result = count(result);
    }
    return result.join("");
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var count = function (nums) {
    const result = [];
    let counter = 0; 
    for (let i = 0; i < nums.length; i++) {
        if (i < nums.length - 1) {
            if (nums[i] === nums[i + 1]) {
                counter++;
            }
            else {
                counter++;
                result.push(counter);
                result.push(nums[i]);
                counter = 0;
            }
        }
        else {
            counter++;
            result.push(counter);
            result.push(nums[i]);
        }
    }
    return result;
}