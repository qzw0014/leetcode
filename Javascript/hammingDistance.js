/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    let xBin = x.toString(2);
    let yBin = y.toString(2);
    let xi = xBin.length - 1;
    let yi = yBin.length - 1;
    let result = 0;
    while (xi >=0 || yi >= 0) {
        let xC = '0';
        let yC = '0';
        if (xi >= 0) {
            xC = xBin.charAt(xi);
        }
        if (yi >= 0) {
            yC = yBin.charAt(yi);
        }
        if (xC != yC) {
            result++
        }
        xi--;
        yi--;
    }
    return result;
};