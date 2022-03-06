/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const rToI = new Map();
    rToI.set('I', 1);
    rToI.set('V', 5);
    rToI.set('X', 10);
    rToI.set('L', 50);
    rToI.set('C', 100);
    rToI.set('D', 500);
    rToI.set('M', 1000);
    let index = 0, result = 0;
    while (index < s.length) {
        if (index < s.length - 1) {
            const iChar = s.charAt(index);
            const iPOChar = s.charAt(index + 1);
            const n = rToI.get(iChar);
            const m = rToI.get(iPOChar);
            if (n < m) {
                result += (m - n);
                index += 2
            }
            else {
                result += n;
                index++
            }
        }
        else {
            const iChar = s.charAt(index);
            const n = rToI.get(iChar);
            result += n;
            index++;
        }
    }
    return result;
};