/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let l = 0, r = num;
    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        if (m * m < num) {
            l = m + 1;
        }
        else if (m * m > num) {
            r = m - 1;
        }
        else {
            return true;
        }
    }
    return false;
};