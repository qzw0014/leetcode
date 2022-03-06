/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let minLength = Number.MAX_VALUE;
    let prefix = "";
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length < minLength) {
            if (strs[i].length == 0) {
                return "";
            }
            minLength = strs[i].length;
            prefix = strs[i];
        }
    }
    let find = false;
    for (let i = 0; i < prefix.length; i++) {
        const subStr = prefix.slice(0, prefix.length - i);
        for (let j = 0; j < strs.length; j++) {
            if (strs[j].indexOf(subStr) != 0) {
                break;
            }
            if (j === strs.length - 1) {
                find = true;
            }
        }
        if (find) {
            prefix = subStr;
            break;
        }
    }
    if (find) {
        return prefix;
    }
    else {
        return "";
    }
};