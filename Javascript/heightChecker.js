/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    if (heights.length === 1) {
        return 0;
    }
    const expected = []
    let result = 0;
    expected.length = heights.length;
    heights.forEach((it, index) => {
        expected[index] = it;
    });
    mergeSort(expected);
    expected.forEach((it, index) => {
        if (it != heights[index]) {
            result++;
        }
    });
    return result;
};

function mergeSort(arr) {
    if (arr.length === 1 || arr.length === 0) {
        return;
    }
    const midIndex = arr.length / 2;
    const sortLeftSubArr = arr.slice(0, midIndex);
    const sortedRightSubArr = arr.slice(midIndex, arr.length);
    mergeSort(sortLeftSubArr);
    mergeSort(sortedRightSubArr);
    mergeSortedSubArr(sortLeftSubArr, sortedRightSubArr, arr);
}

function mergeSortedSubArr(leftArray, rightArray, array) {
    let leftIndex = 0, rightIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (rightIndex === rightArray.length || leftArray[leftIndex] < rightArray[rightIndex]) {
            array[i] = leftArray[leftIndex];
            leftIndex++;
        }
        else {
            array[i] = rightArray[rightIndex];
            rightIndex++;
        }
    }
}


let heights = [0];
console.log(heightChecker(heights));