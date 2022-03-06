/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n < 0) {
        n = -n;
        x = 1 / x;
    }
    let pow = 1;
    while(n != 0) {
        if ((n & 1) != 0) {
            pow = pow * x;
        }
        x = x * x;
        n >>>= 1;
    }
    return pow;
};