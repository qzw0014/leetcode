/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [];
    let currentInt;
    for (let i = 0; i < intervals.length; i++) {
        if (i === 0) {
            currentInt = intervals[i];
        }
        else {
            const tmp = intervals[i];
            if (currentInt[0] <= tmp[0] && currentInt[1] >= tmp[0]) {
                if (currentInt[1] < tmp [1]) {
                    currentInt[1] = tmp[1];
                }
            }
            else {
                result.push(currentInt);
                currentInt = tmp;
            }
        }
    }
    result.push(currentInt);
    return result;
};