/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let result = 0;
    let subArr = [];
    for (let i = 0; i < s.length; i++) {
        const aChar = s.charAt(i);
        if (!subArr.includes(aChar)) {
            subArr.push(aChar);
            result = subArr.length > result ? subArr.length : result;
        }
        else {
            if (subArr.indexOf(aChar) === subArr.length - 1) {
                subArr = [aChar];
            }
            else {
                subArr = subArr.slice(subArr.indexOf(aChar) + 1)
                subArr.push(aChar);
            }
            result = subArr.length > result ? subArr.length : result;
        }
    }
    return result;
};