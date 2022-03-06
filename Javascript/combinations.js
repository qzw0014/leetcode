/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const result = [];
    var appendNumber = function (comb, range, index) {
        if (index > k - 1) {
            result.push([...comb]);
            return;
        } 
        for (let i = range; i <= n; i++) {
            comb[index] = i;
            appendNumber(comb, i + 1, index + 1);
        }   
    }
    const comb = new Array(k);
    appendNumber(comb, 1, 0);
    return result;
};

combine(4, 2);