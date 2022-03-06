/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let times = new Map();
    nums.forEach(item => {
        let number = times.has(item) ? times.get(item) : 0;
        times.set(item, number + 1);
    });

    let sortArr = [...times.entries()].sort((a, b) => b[1] - a[1])
    return sortArr[0][0];
};

majorityElement([6,5,5])