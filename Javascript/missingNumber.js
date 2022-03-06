/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    const map = new Map();
    nums.forEach(it => {
        map.set(it, 1);
    })
    for (let i = 0; i <= nums.length; i++) {
        if (map.get(i) === undefined) {
            return i;
        }
    }
};