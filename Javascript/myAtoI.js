/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    if (s.length === 0) {
        return 0;
    }
    let i = 0, startRead = false;
    const nums = [];
    while ( i < s.length) {
        if (s.charAt(i) === "+" || s.charAt(i) === "-" || (s.charAt(i) >= "0" && s.charAt(i) <= "9")) {
            if (startRead) {
                if (s.charAt(i) === "+" || s.charAt(i) === "-") {
                    break;
                }
                else {
                    nums.push(s.charAt(i));
                }
            }
            else {
                startRead = true;
                nums.push(s.charAt(i));
            }
        }
        else {
            if (startRead) {
                break;
            }
            else {
                if (s.charAt(i) != " ") {
                    break;
                }
            }
        }
        i++;
    }
    if (nums.length === 0) {
        return 0;
    }
    let result = parseInt(nums.join(""));
    if (result === NaN) {
        return 0;
    }
    if (result < (0 - Math.pow(2, 31))) {
        return 0 - Math.pow(2, 31);
    }
    if (result > (Math.pow(2, 31) - 1)) {
        return Math.pow(2, 31) - 1;
    }
    return result;
};

//console.log(myAtoi("uiyihjhk+0008ddd"))

