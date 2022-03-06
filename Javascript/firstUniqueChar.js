/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    if (s.length === 1) {
        return 0;
    }
    const charMap = new Map();
    for (let i = 0; i < s.length; i++) {
        console.log(charMap.get(s[i]));
        if (charMap.get(s[i]) !== undefined) {
            charMap.set(s[i], -1);
        }
        else {
            charMap.set(s[i], i);
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (charMap.get(s[i]) != -1) {
            return i;
        }
    }
    return -1;
};

firstUniqChar("loveleetcode")
