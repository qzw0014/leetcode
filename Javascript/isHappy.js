/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let strNum = n.toString();
    let result = [];
    let tmp = 0;
    while(tmp != 1) {
        tmp = 0;
        for (let i = 0; i< strNum.length; i++) {
            tmp = Math.pow(parseInt(strNum[i]), 2) + tmp;
        }
        strNum = tmp.toString();
        if (result.includes(strNum)) {
            return false;
        }
        result.push(strNum);
    }
    return true;
};

isHappy(19)