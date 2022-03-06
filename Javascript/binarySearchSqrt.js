/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    if (x === 0) {
        return 0;
    }
    let a = 1, b = Math.floor(x/2);
    while (a <= b) {
        let mid = Math.floor((a + b) / 2);
        if (mid * mid === x) {
            return mid;
        }
        else if (mid * mid > x) {
            b = mid - 1;
        }
        else {
            a = mid + 1
        }
    }
    return a * a <= x ? a : b; 
};