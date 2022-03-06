/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length === 1) {
        return false;
    }
    const stack = new Array();
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        }
        else {
            if (stack.length === 0) {
                return false;
            }
            const topChar = stack[stack.length - 1];
            if (isPair(char, topChar)) {
                stack.pop();
            }
            else {
                return false;
            }
        }
    }
    if (stack.length === 0) {
        return true;
    }
    else {
        return false;
    }
};

/**
 * @param {string} s
 * @param {string} topChar
 * @returns {boolean}
 */
var isPair = function (s, topChar) {
    switch (s) {
        case ')':
            if (topChar === '(') {
                return true;
            }
            else {
                return false;
            }
        case '}':
            if (topChar === '{') {
                return true;
            }
            else {
                return false;
            }
        case ']':
            if (topChar === '[') {
                return true;
            }
            else {
                return false;
            }
        default:
            return false;
    }
}

isValid('()')