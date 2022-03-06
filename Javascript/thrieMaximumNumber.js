/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let firstMax = nums[0], secMax = null, thirdMaxNum = null;
    if (nums.length === 1) {
        return firstMax;
    }
    nums.forEach((number, index) => {
        if (index > 0) {
            if (number > firstMax) {
                if (secMax != null) {
                    thirdMaxNum = secMax;     
                }
                secMax = firstMax;
                firstMax = number;
            }
            else if (secMax === null && number < firstMax) {
                secMax = number;
            }
            else if (number > secMax && number < firstMax) {
                thirdMaxNum = secMax;
                secMax = number;
            }
            else if (thirdMaxNum === null && secMax != null && number < secMax ) {
                thirdMaxNum = number;
            }
            else if (number > thirdMaxNum && secMax != null && number < secMax) {
                thirdMaxNum = number;
            }
        }
    });
    if (thirdMaxNum != null) {
        return thirdMaxNum;
    }
    return firstMax;
};

let nums = [-2147483648,-2147483648,-2147483648,-2147483648,1,1,1];
console.log(thirdMax(nums));