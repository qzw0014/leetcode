/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function (s) {
    let charSet = new Set();
    let max = 0;
    let current = 0;
    for (let i = 0;  i < s.length; i++) {
        if (charSet.has(s[i])) {
            current++;
            max = Math.max(current, max);
        }
        else {
            if (charSet.size < 2) {
                charSet.add(s[i]);
                current++;
                max = Math.max(current, max);
            }
            else {
                charSet.clear();
                charSet.add(s[i]);
                current = 1;
                if (i > 0) {
                    let preIndex = i - 1;
                    const preChar = s[preIndex];
                    charSet.add(preChar);
                    while (preIndex >= 0 && s[preIndex] === preChar) {
                        current++;
                        preIndex--;
                    }
                } 
                max = Math.max(current, max);
            }
        }
    }
    return max;
};