/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let numsSet = new Set(nums);
    let maxLength = 0;
    numsSet.forEach((number) => {
        if (!numsSet.has(number - 1)) {
            let currentNumber = number;
            let tmpLength = 1;
            while(numsSet.has(currentNumber + 1)) {
                currentNumber++;
                tmpLength++;
            }
            maxLength = Math.max(maxLength, tmpLength);
        }
    });
    return maxLength;
};

longestConsecutive([100,4,200,1,3,2])