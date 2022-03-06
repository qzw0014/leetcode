/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const anagramMap = new Map();
    for (let i = 0; i < strs.length; i++) {
        const key = strs[i].split('').sort().join('');
        if (!anagramMap.has(key)) {
            anagramMap.set(key, [strs[i]]);
        }
        else {
            const val = anagramMap.get(key);
            val.push(strs[i]);
            anagramMap.set(key, val);
        }
    }
    const result = [];
    anagramMap.forEach((val, key) => {
        result.push(val);
    });
    return result;
};

//groupAnagrams(["eat","tea","tan","ate","nat","bat"])