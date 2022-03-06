/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    if (x === 0) {
        return x;
    }
    let num = x;
    if (x < 0) {    
        num = 0 - num;
    }
    const nums = [];
    while (num > 0) {
        nums.push(num % 10);
        num = Math.floor(num / 10);
    }
    let result = parseInt(nums.join(""));
    if (x < 0) {
        result = 0 - result;
        if (result < (0 - Math.pow(2, 31))) {
            result = 0;
        }
    }
    else if (result > (Math.pow(2, 31) - 1)) {
        result = 0;
    }
    return result;
};


reverse(123)