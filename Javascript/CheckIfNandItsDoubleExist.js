/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var checkIfExist = function(arr) {
    let dataMap = {}
    let found = false
    arr.forEach(it => {
        if(dataMap[it]) {
            dataMap[it]++;
        }
        else {
            dataMap[it] = 1;
        }
    });
    arr.forEach(it => {
        if (dataMap[it * 2]) {
            if (it === 0 && dataMap[0] != 2) {
                found = false;
            }
            else {
                found = true;
            }
            return;
        }
    });
    return found;
};

let arr = [-2,0,10,-19,4,6,-8];
console.log(checkIfExist(arr));