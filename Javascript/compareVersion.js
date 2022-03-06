/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    const v1Arr = version1.split('.');
    const v2Arr = version2.split('.');
    const endPoint = Math.max(v1Arr.length, v2Arr.length);
    for (let i = 0; i < endPoint; i++) {
        const v1 = i >= v1Arr.length ? 0 : parseInt(v1Arr[i]);
        const v2 = i >= v2Arr.length ? 0 : parseInt(v2Arr[i]);
        if (v1 > v2) {
            return 1;
        }
        else if (v1 < v2) {
            return -1;
        }
    }
    return 0;
};