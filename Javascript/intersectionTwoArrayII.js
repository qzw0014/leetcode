/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const obj1 = {};
    const result = [];
    for (let i = 0; i < nums1.length; i++) {
        if (obj1[nums1[i]]) {
            obj1[nums1[i]] = obj1[nums1[i]] + 1;
        }
        else {
            obj1[nums1[i]] = 1;
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        if (obj1[nums2[i]] && obj1[nums2[i]] > 0) {
            result.push(nums2[i]);
            obj1[nums2[i]]--;
        }
    }
    return result;
};

