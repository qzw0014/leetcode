/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (s.length < t.length) {
        return '';
    }
    let l = 0, r = 0;
    let result = [0, 0];
    let minLen = Number.MAX_VALUE;
    const tMap = new Map()
    t.split('').forEach(item => {
        if(tMap.has(item)) {
            const tmp = tMap.get(item) + 1;
            tMap.set(item, tmp);
        }
        else {
            tMap.set(item, 1);
        }
    });
    const unt = Array.from(tMap.keys()).length
    const subMap = new Map();
    let unSub = 0;
    while (l < s.length && r < s.length) {
        let char = s[r];
        let tmp = subMap.has(char) ? subMap.get(char) : 0;
        subMap.set(char, tmp + 1);
        if (tMap.has(char) && tMap.get(char) === tmp + 1) {
            unSub++;
        }
        while (l <= r && unSub === unt) {
            if (r + 1 - l < minLen) {
                minLen = r + 1 - l;
                result = [l, r + 1];
            }
            let lChart = s[l];
            const tmp = subMap.get(lChart) - 1
            subMap.set(lChart, tmp);
            if (tMap.has(lChart) && tmp < tMap.get(lChart)) {
                unSub--;
            }
            l++;
        }
        r++;
    }
    return s.slice(...result);
};

minWindow('a', 'a');