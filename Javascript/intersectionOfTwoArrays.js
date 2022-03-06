/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let obj1 = {}, obj2 = {};
    nums1.forEach(it => {
        obj1[it] = 1;
    });
    nums2.forEach(it => {
        obj2[it] = 1;
    });
    let result = [];
    Object.keys(obj1).forEach(it => {
        if (obj2[it]) {
            result.push(it);
        }
    });
    return result;
};