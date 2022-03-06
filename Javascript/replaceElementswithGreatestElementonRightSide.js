/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var replaceElements = function(arr) {
    let maxValue = arr[arr.length - 1];
    arr[arr.length - 1] = -1;
    if (arr.length === 1) {
        return result;
    }
    for (let i = arr.length - 2; i >= 0 ; i--) {
        if (maxValue > arr[i + 1]) {
            let tmp = arr[i]
            arr[i] = maxValue;
            if (tmp > maxValue) {
                maxValue = tmp;
            }
        }
        else {
            let tmp = arr[i];
            arr[i] = arr[i + 1];
            if (tmp > maxValue) {
                maxValue = tmp;
            }
        }
    }
    return arr;
};


let arr = [17,18,5,4,6,1];
console.log(replaceElements(arr));