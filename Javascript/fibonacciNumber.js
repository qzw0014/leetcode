/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    const nums = new Array(n + 1);
    nums.fill(-1, 0, n + 1);
    return calculator(n, nums);
};

var calculator = function(n, nums) {
    if (nums[n] != -1) {
        return nums[n];
    }
    else {
        if (n === 0) {
            nums[0] = 0;
            return 0;
        }
        if (n === 1) {
            nums[1] = 1;
            return 1;
        }
        return calculator(n - 1, nums) + calculator(n - 2, nums);
    }
}

console.log(fib(2))