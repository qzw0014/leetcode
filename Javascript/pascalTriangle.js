/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let result = new Array()
    for (let i = 1; i <= numRows; i++) {
        if (i === 1) {
            result.push([1])
        }
        else {
            const upperLine = result[i - 2];
            const currentLine = new Array();
            for (let j = 0; j < i; j++) {
                if (j === 0 || j === i - 1) {
                    currentLine.push(1);
                }
                else {
                    const currentNumber = upperLine[j - 1] +  upperLine[j];
                    currentLine.push(currentNumber)
                }
            }
            result.push(currentLine);
        }
    }
    return result;
};

generate(5)