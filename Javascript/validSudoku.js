/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    for (let i = 0; i < board.length; i++) {
        const tmpMap = new Map();
        for (let j = 0; j < board[i].length; j++) {
            if (tmpMap.get(board[i][j]) && board[i][j] != ".") {
                return false;
            }
            else {
                tmpMap.set(board[i][j], 1);
            }
        }
    }
    for (let j = 0; j < board.length; j++) {
        const tmpMap = new Map();
        for (let i = 0; i < board.length; i++) {
            if (tmpMap.get(board[i][j]) && board[i][j] != ".") {
                return false;
            }
            else {
                tmpMap.set(board[i][j], 1);
            }
        }
    }
    for (let i = 0; i <= board.length - 3; i += 3) {
        for (let j = 0; j <= board.length - 3; j += 3) {
            let row = i, col = j;
            const tmpMap = new Map();
            for (row = i; row < i + 3; row++) {
                for (col = j; col < j + 3; col++) {
                    if (tmpMap.get(board[row][col]) && board[row][col] != ".") {
                        return false;
                    }
                    else {
                        tmpMap.set(board[row][col], 1);
                    }
                }
            }
        }
    }
    return true;
};