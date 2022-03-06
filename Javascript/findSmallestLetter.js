/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    let left = 0, right  = letters.length;
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (letters[mid] <= target) {
            left = mid + 1;
        }
        else {
            right = mid;
        }
    }
    return letters[left % letters.length]
};