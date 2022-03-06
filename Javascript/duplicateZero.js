/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
 var duplicateZeros = function(arr) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            moveLeft(arr, i);
            i++;
        }
    }
};

function moveLeft(arr, index) {
    for (let i = arr.length - 1; i > index; i--) {
        arr[i] = arr[i - 1];
    }
}
let arr = [1,0,2,3,0,4,5,0];
duplicateZeros(arr)
console.log(arr);