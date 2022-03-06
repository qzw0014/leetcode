/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
    const dataMap = new Map();
    const result = [];
    for (let i = 0; i < buildings.length; i++) {
        const build = buildings[i];
        for (let j = build[0]; j <= build[1]; j++) {
            if (!dataMap.has(j)) {
                if (j != build[1]) {
                    dataMap.set(j, build[2]);
                }
                else {
                    dataMap.set(j, 0);
                }
            }
            else {
                if (j != build[1]) {
                    if (dataMap.get(j) < build[2]) {
                        dataMap.set(j, build[2]);
                    }
                }
            }
        }
    }
    let currentHigh = 0;
    dataMap.forEach((value, key) =>{
        if (value != currentHigh) {
            result.push([key, value]);
            currentHigh = value;
        }
    });
    return result;
};

getSkyline([[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]])