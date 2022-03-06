/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    const left = new Array(height.length);
    const right =  new Array(height.length);
    let maxTmp = 0;
    for (let i = 0; i < height.length; i++) {
        maxTmp = Math.max(maxTmp, height[i]);
        left[i] = maxTmp;
    }
    maxTmp = 0;
    for (let i = height.length - 1; i >= 0; i--) {
        maxTmp = Math.max(maxTmp, height[i]);
        right[i] = maxTmp
    }
    let result = 0;
    for (let i = 0; i < height.length; i++) {
        result += Math.min(left[i], right[i]) - height[i];
    }
    return result;
};

trap([0,1,0,2,1,0,1,3,2,1,2,1]);