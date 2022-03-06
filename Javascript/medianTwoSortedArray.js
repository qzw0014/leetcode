/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let f = 0, s = 0;
    const combA = [];
    while(f < nums1.length && s < nums2.length) {
        if (nums1[f] <= nums2[s]) {
            combA.push(nums1[f]);
            f++;
        }
        else {
            combA.push(nums2[s]);
            s++;
        }
    }
    while(f < nums1.length) {
        combA.push(nums1[f]);
        f++;
    }
    while(s < nums2.length) {
        combA.push(nums2[s]);
        s++;
    }
    return ((nums1.length + nums2.length) % 2 === 0) ?  (combA[Math.floor((nums1.length + nums2.length) / 2)] + combA[Math.floor((nums1.length + nums2.length) / 2) - 1]) /2 : combA[Math.floor((nums1.length + nums2.length) / 2)]
};