/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    let result = []
    while(columnNumber >26 ) {
        let codeN = columnNumber % 26;
        result.unshift(String.fromCharCode(codeN + 64));
        columnNumber = Math.floor(columnNumber / 26);
    }
    result.unshift(String.fromCharCode(columnNumber + 64));

    return result.join('');
};

convertToTitle(701)