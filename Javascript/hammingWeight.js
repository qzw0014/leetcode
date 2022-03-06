/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    const binaryStr = n.toString(2);
    console.log(binaryStr)
    let result = 0;
    for (let i = 0; i < binaryStr.length; i++) {
        if (binaryStr.charAt(i) === '1') {
            result++;
        }
    }
    return result;
};
