/**
 * @param {number} n
 * @return {number[][]}
 */
var getFactors = function (n) {
    let result = [];
    let combine = [];
    if (n === 1) {
        return result;
    }
    generateCombine(n, result, combine, Math.floor(n / 2));
    return result;
};

/**
 * @param {number} n
 * @param {number[][]} result
 * @param {number[]} combine
 * @param {number} start
 * @return {boolean}
 */
let generateCombine = function(n, result, combine, start) {
    if (n === 1) {
        result.push([...combine]);
    }

    for (let i = start; i >=2; i--) {
        const rem = n % i;
        if (rem === 0) {
            combine.push(i);
            generateCombine(n / i, result, combine, i);
            combine.pop();
        }
    }
}

getFactors(12)