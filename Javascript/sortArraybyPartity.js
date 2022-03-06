/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
    if(nums.length < 2) {
        return;
    }  
    let headIndex = 0, tailIndex = nums.length - 1;
    while (true) {
        while(headIndex < nums.length) {
            if (nums[headIndex] % 2 === 1) {
                break;
            }
            headIndex++;
        }
        while(tailIndex >= 0) {
            if (nums[tailIndex] % 2 === 0) {
                break;
            }
            tailIndex--;
        }
        if (headIndex < tailIndex) {
            let tmp = nums[headIndex];
            nums[headIndex] = nums[tailIndex];
            nums[tailIndex] = tmp;
        }
        else {
            break;
        }
    }
};

let nums = [2,2,2,2,2,2,2,3];
sortArrayByParity(nums);
console.log(nums);