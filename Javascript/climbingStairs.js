/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    return calculator(n)
};

var calculator = function(n) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    let fb1 = 1, fb2 = 2;
    let num = 3;
    while (n >= num) {
        let tmp = fb2;
        fb2 = fb2 + fb1;
        fb1 = tmp;
        num++;
    }
    return fb2;
}