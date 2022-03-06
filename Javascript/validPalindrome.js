/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const palArray = [];
    s = s.toLowerCase()
    for (let i = 0; i < s.length; i++) {
        if ((s.charAt(i) >= 'a' && s.charAt(i) <= 'z') || (s.charAt(i) >= '0' && s.charAt(i) <= '9')) {
            palArray.push(s.charAt(i));
        }
    }
    let sP = 0, eP = palArray.length - 1;
    while (sP < eP) {
        if (palArray[sP] != palArray[eP]) {
            return false;
        }
        sP++;
        eP--
    }
    return true;
};