/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {

    let left = 0, right = nums.length - 1;

    while (left < right) {
        let pivot = Math.floor((right + left) / 2);


        if (nums[pivot] < nums[right]) //case 1: high index has higher value than pivot. So we re-assign high index using pivot index
            right = pivot;
        else if (nums[pivot] > nums[right]) //case 2: since pivot has higher value than right index, assign left index with pivot + 1
            left = pivot + 1;
        else if (nums[pivot] === nums[right]) //case 3: if pivot has equal value with right index element, reduce right index value by 1. This case happens because of duplicate values
            right -= 1;
    }


    return nums[left];
};