/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    s = s.trim();
    let i = 0;
    const subArr = []
    if (s[0] === '+' || s[0] === '-') {
        subArr.push(s[0]);
        i = 1;
    }
    let charCode = s.charCodeAt(i);
    while(charCode >= 48 && charCode <= 57 && i < s.length) {
        subArr.push(s[i]);
        i++;
    }
    let result = parseInt(subArr.join(""));
    if (!result) {
        return 0;
    }
    result = result < -2147483648 ? -2147483648 : result;
    result = result > 2147483647 ? 2147483647: result;
    return result;
};

console.log(myAtoi("words and 987"))