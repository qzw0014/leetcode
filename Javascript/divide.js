/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    let sign = (((dividend > 0) && (divisor > 0)) || ((dividend < 0) && (divisor < 0))) ? true : false;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    let result = 0;
    while (dividend >= divisor) {
        dividend -= divisor;
        result++;
    }
    result = sign ? result : -result;
    return result;
};