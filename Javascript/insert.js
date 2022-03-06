/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let result = [];
    let first = true;
    for (let i = 0; i < intervals.length; i++) {
        if (newInterval[0] > intervals[i][0]) {
            result.push(intervals[i]);
        }
        else {
            if (first && result.length > 0) {
                const prev = result.pop();
                if (prev[1] < newInterval[0]) {
                    result.push(prev);
                }
                else {
                    newInterval[0] = prev[0];
                    if (prev[1] > newInterval[1]) {
                        newInterval[1] = prev[1];
                    }
                }
                first = false;
            }
            if (newInterval[1] < intervals[i][0]) {
                result.push([...newInterval]);
                newInterval = intervals[i];
            }
            else {
                if(newInterval[1] <= intervals[i][1]) {
                    newInterval[1] = intervals[i][1];
                }
            }
        }
    }
    if (first && result.length > 0) {
        const prev = result.pop();
        if (prev[1] < newInterval[0]) {
            result.push(prev);
        }
        else {
            newInterval[0] = prev[0];
            if (prev[1] > newInterval[1]) {
                newInterval[1] = prev[1];
            }
        }
    }
    result.push(newInterval);
    return result;
};