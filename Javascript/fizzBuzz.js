/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        const tmp = i + 1;
        if ((tmp) % 3 === 0 && (tmp % 5) === 0) {
            result.push('FizzBuzz');
        }
        else if ((tmp) % 3 === 0) {
            result.push('Fizz');
        }
        else if ((tmp % 5) === 0) {
            result.push('Buzz');
        }
        else {
            result.push(tmp.toString());
        }
    }
    return result;
};