/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    const result = [];
    for(let i = 0; i <= rowIndex; i++) {
        calculateRow(i, result);
    }
    return result[rowIndex];
};


var calculateRow = function (rowIndex, memory) {
    const row = [];
    if (rowIndex === 0) {
        row.push(1);
        memory.push(row);
        return;
    }
    const lastRow = memory[rowIndex - 1];
    let start = 0, end = rowIndex;
    while (start <= end) {
        if (start === 0) {
            row[start] = 1;   
        }
        else {
            row[start] = lastRow[start - 1] + lastRow[start];
        }
        row[end] = row[start];
        start++;
        end--;
    }
    memory.push(row);
}


console.log(getRow(31))