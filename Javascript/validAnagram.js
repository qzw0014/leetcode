/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false;
    }
    const charMap = new Map();
    for (let i = 0; i < s.length; i++) {
        if (charMap.get(s.charAt(i)) === undefined) {
            charMap.set(s.charAt(i), 1);
        }
        else {
            let tmp = charMap.get(s.charAt(i)) + 1;
            charMap.set(s.charAt(i), tmp);
        }
    }
    for (let i = 0; i < t.length; i++) {
        const tChar = t.charAt(i);
        if (charMap.get(tChar) !== undefined) {
            const tmp = charMap.get(tChar) - 1;
            if (tmp === 0) {
                charMap.delete(tChar);
            }
            else {
                charMap.set(tChar, tmp);
            }
        }
        else {
            return false;
        } 
    }
    if (charMap.size > 0) {
        return false;
    }
    return true;
};