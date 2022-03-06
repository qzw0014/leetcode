/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let p1 = 0, p2 = numbers.length - 1;
    const result = [];
    while(p1 < p2) {
        let sum = numbers[p1] + numbers[p2];
        if (sum === target) {
            return [p1 + 1, p2 + 1];
        }
        else if (sum > target) {
            p2--;
        }
        else {
            p1++;
        }
    }
    return result;
};

twoSum([2,7,11,15],9)