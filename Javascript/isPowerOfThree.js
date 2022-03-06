/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    const regex = new RegExp('^10*$');
    return regex.test(n.toString(3));
};

console.log(isPowerOfThree(0))