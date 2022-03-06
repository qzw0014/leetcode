/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const result = [], parenthesis = [];
    var backTrace = function (parenthesis, left, right) {
        if (parenthesis.length === 2* n) {
            result.push(parenthesis.join(""));
            return;
        }
        if (left < n) {
            parenthesis.push("(");
            backTrace(parenthesis, left + 1, right);
            parenthesis.pop();
        }
        if (right < n && right < left) {
            parenthesis.push(")");
            backTrace(parenthesis, left, right + 1);
            parenthesis.pop();
        }
    }
    backTrace(parenthesis, 0, 0);
    return result;
};

console.log(generateParenthesis(1));