/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let increment = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        let tmp = digits[i] + increment
        digits[i] = tmp % 10;
        if (tmp < 10) {
            increment = 0
        } 
    }
    if (increment === 1) {
        digits.unshift((0 + increment));
    }
    return digits;
};


plusOne([9])