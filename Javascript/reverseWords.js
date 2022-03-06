/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const sArr = s.trim().split(' ').reverse();
    const loop = sArr.length;
    for (let i = 0; i < loop; i++) {
        const word = sArr.pop().trim();
        if (word.length > 0) {
            sArr.unshift(word);
        }
    }
    return sArr.join(' ');
};


reverseWords("a good   example");