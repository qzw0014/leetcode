/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var validMountainArray = function(arr) {
    let state = "up";
    if (arr.length < 3) {
        return false;
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            return false;
        }
        if (state === "up" && arr[i] < arr[i - 1]) {
            if (i === 1) {
                return false;
            }
            state = "down";
        }
        if (arr[i] > arr[i - 1] && state === "down") {
            return false;
        }
    }
    if (state === "up") {
        return false;
    }
    return true;
};

let arr = [9,8,7,6,5,4,3,2,1,0]
console.log(validMountainArray(arr));