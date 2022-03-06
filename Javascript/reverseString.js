/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    reverse(s, 0);
};

var reverse = function (s, index) {
    if (index < s.length - 1) {
        reverse(s, index + 1);
    }
    let smI = s.length - 1 - index;
    if (smI <= index) {
        let tmp = s[index];
        s[index] = s[smI];
        s[smI] = tmp;
    }
}