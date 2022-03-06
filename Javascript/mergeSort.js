/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    let result = mergeSort(nums);
    return result;
};


var mergeSort = function(nums) {
    if (nums.length  === 1) {
        return nums;
    }
    const mid = Math.floor(nums.length / 2);
    let subArray1 = mergeSort(nums.slice(0, mid));
    let subArray2 = mergeSort(nums.slice(mid));
    merge(nums, subArray1, subArray2);
    return nums;
}

var merge = function (nums, sub1, sub2) {
    let i = 0, j = 0, k = 0;
    while (i < sub1.length && j < sub2.length) {
        if (sub1[i] < sub2[j]) {
            nums[k] = sub1[i];
            i++;
        }
        else {
            nums[k] = sub2[j];
            j++;
        }
        k++;
    }
    while (i < sub1.length) {
        nums[k] = sub1[i];
        i++;
        k++;
    }
    while (j < sub2.length) {
        nums[k] = sub2[j];
        j++;
        k++;
    }
}


sortArray([-1,2,-8,-10])