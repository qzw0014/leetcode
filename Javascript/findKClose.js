/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
    let left = 0, right = arr.length - 1;
    let mid = -1;
    const result = []; 
    while (left + 1 < right) {
        mid = left + Math.floor((right - left) / 2);
        if (arr[mid] > x) {
            right = mid;
        }
        else if (arr[mid] < x) {
            left = mid;
        }
        else {
            let fi = mid - 1, ri = mid + 1;
            result.push(arr[mid]);
            while (fi >= 0 && ri < arr.length && result.length < k) {
                if ((arr[mid] - arr[fi]) < (arr[ri] - arr[mid])) {
                    result.unshift(arr[fi]);
                    fi--;
                }
                else if ((arr[mid] - arr[fi]) > (arr[ri] - arr[mid])){
                    result.push(arr[ri]);
                    ri++;
                }
                else {
                    result.unshift(arr[fi]);
                    fi--;
                }
            }
            if (result.length < k) {
                if (fi < 0) {
                    while (result.length < k) {
                        result.push(arr[ri]);
                        ri++;
                    }
                    return result;
                }
                else {
                    while (result.length < k) {
                        result.unshift(arr[fi]);
                        fi--;
                    }
                    return result;
                }
            }
            else {
                return result;
            } 
        }
    }
    let fi = left, ri = right;
    let absL = Math.abs(arr[fi] - x);
    let absR = Math.abs(arr[ri] - x);
    if (absL <= absR) {
        result.push(arr[fi]);
        fi--;
    }
    else {
        result.push(arr[ri]);
        ri++;
    }
    while (fi >= 0 && ri < arr.length && result.length < k) {
        if ((x - arr[fi]) < (arr[ri] - x)) {
            result.unshift(arr[fi]);
            fi--;
        }
        else if ((x - arr[fi]) > (arr[ri] - x)){
            result.push(arr[ri]);
            ri++;
        }
        else {
            result.unshift(arr[fi]);
            fi--;
        }
    }
    if (result.length < k) {
        if (fi < 0) {
            while (result.length < k) {
                result.push(arr[ri]);
                ri++;
            }
            return result;
        }
        else {
            while (result.length < k) {
                result.unshift(arr[fi]);
                fi--;
            }
            return result;
        }
    } 
    return result;
};

findClosestElements([1,2,3,4,5], 4,-1);
