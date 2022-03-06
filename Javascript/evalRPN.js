/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const numberStack = [];
    const operators = ['+', '-', '*', '/'];
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        if (!operators.includes(token)) {
            numberStack.push(parseInt(token));
        }
        else {
            const second = numberStack.pop();
            const first = numberStack.pop();
            switch(token) {
                case '+':
                    numberStack.push(first + second);
                    break;
                case '-':
                    numberStack.push(first - second);
                    break;
                case '*':
                    numberStack.push(first * second);
                    break;
                default :
                    numberStack.push(Math.trunc(first / second));
                    break;
            }
        }
    }
    return numberStack.pop();
};
evalRPN(
    ["2","1","+","3","*"])