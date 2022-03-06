/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    let binStr = n.toString(2).split('');
    for (i = binStr.length; i < 32; i++) {
        binStr.unshift('0');
    }
    let reBinStr = binStr.reverse().join('')
    return parseInt(reBinStr, 2);
};

console.log(reverseBits(43261596))