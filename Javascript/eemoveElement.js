/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    if (nums.length === 0 ){
        return 0;
    }
    if (nums.length === 1 && nums[0] === val) {
        return 0;
    }
    let scanIndex = 0, removeIndex = nums.length - 1;
    while(scanIndex < removeIndex) {
        if (nums[scanIndex] === val) {
            while (nums[removeIndex] === val) {
                removeIndex--;
                if(removeIndex === scanIndex) {
                    return scanIndex;
                }
            }
            nums[scanIndex] = nums[removeIndex];
            nums[removeIndex] = val;
            removeIndex--;
        }
        scanIndex++;
    }
    if (nums[scanIndex] != val) {
        return scanIndex + 1;
    }
    return scanIndex;
};


let nums = [3,2,2,3], val = 3
console.log(removeElement(nums, val));
console.log(nums);