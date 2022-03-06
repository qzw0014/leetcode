/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length != t.length) {
        return false;
    }
    const sFormat = stringConvert(s);
    const tFormat = stringConvert(t);
    for (let i = 0; i < s.length; i++) {
        if (sFormat[i] != tFormat[i]) {
            return false;
        }
    }
    return true;
};

/**
 * 
 * @param {string} s
 * @returns {string} 
 */
let stringConvert = function (s) {
    let charMap = new Map();
    let strFormat = [];
    for (let i = 0; i< s.length; i++) {
        const item = s[i];
        if (charMap.has(item)) {
            strFormat[i] = charMap.get(item);
        }
        else {
            const mapIndex = charMap.size;
            charMap.set(item, mapIndex);
            strFormat[i] = mapIndex;
        }
    }
    return strFormat;
}

isIsomorphic("egg",
"add")