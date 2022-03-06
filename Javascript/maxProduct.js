/**
* @param {number[]} nums
* @return {number}
*/
var maxProduct = function (arr) {
    let n = arr.length
    let minVal = arr[0];
    let maxVal = arr[0];
    let maxProduct = arr[0];
    for (let i = 1; i < n; i++) {
        if (arr[i] < 0) {
            let temp = maxVal;
            maxVal = minVal;
            minVal = temp;

        }
        maxVal = Math.max(arr[i], maxVal * arr[i]);
        minVal = Math.min(arr[i], minVal * arr[i]);
        maxProduct = Math.max(maxProduct, maxVal);
    }

    return maxProduct;
};