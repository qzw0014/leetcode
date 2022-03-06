/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const phone = {
        "2": ["a", "b", "c"],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    }

    const result = [];
    const stringBuilder = new Array(digits.length);
    var generator = function (stringBuilder, characters, index) {
        for (let i = 0 ; i < characters.length; i++) {
            stringBuilder[index] = characters[i];
            if (index < digits.length - 1) {
                generator(stringBuilder, phone[digits.charAt(index + 1)], index + 1);
            }
            else {
                result.push(stringBuilder.join(""));
            }
        }
    }
    if (digits.length > 0) {
        generator(stringBuilder, phone[digits.charAt(0)], 0);
    }
    return result;
};


letterCombinations('23');