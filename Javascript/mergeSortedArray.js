/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    let i = m - 1 , j = n - 1, index = m + n - 1;
    if (m === 0) {
        nums2.forEach((it, index) => {
            nums1[index] = it;
        });
        return;
    }
    if (n === 0) {
        return;
    }
    console.log(nums1)
    while(true) {
        const firstItem = nums1[i];
        const secondItem = nums2[j];
        if (firstItem > secondItem) {
            nums1[index] = firstItem;
            index--;
            if (i === 0) {
                for (let k = j; k>=0; k--) {
                    nums1[index] = nums2[k];
                    index--;
                }
                break;
            }
            else {
                i--;
            }
        }
        else {
            nums1[index] = secondItem;
            index--;
            if (j === 0) {
                break;
            }
            else {
                j--;
            }
        }
    }
};

let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;

merge(nums1, m, nums2, n);

console.log(nums1);


