/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    let result = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        const power = columnTitle.length - 1 - i;
        const code = columnTitle.charCodeAt(i) - 64;
        result = result + code * Math.pow(26, power);
    }
    return result;
};