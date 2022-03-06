/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle.length === 0) {
        return 0;
    }
    if (needle.length > haystack.length) {
        return -1;
    }
    let result = null, find = false;
    for (let i  = 0; i <= haystack.length - needle.length; i++) {
        if (haystack.charAt(i) === needle.charAt(0)) {
            let k = i + 1;
            find = true;
            for (let j = 1; j < needle.length; j++) {
                if (haystack.charAt(k) != needle.charAt(j)) {
                    find = false;
                    break;
                }
                k++;
            }
            if (find) {
                result = i;
                break;
            }
        }
    }
    if (find) {
        return result;
    }
    else {
        return -1;
    }
};

//console.log(strStr("mississippi","issip"))