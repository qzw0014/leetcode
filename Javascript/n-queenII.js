/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
    const board = new Array(n);
    for (let i = 0; i < n; i++) {
        const tmp = new Array(n);
        tmp.fill(0);
        board[i] = tmp;
    }
    let count = 0;
    count = backTrackNQueen(0, count, board);
    return count;
};

var backTrackNQueen = function (row, count, board) {
    const n = board.length;
    for (let col = 0; col < n; col++) {
        if (isNotUnderAttact(row, col, board)) {
            placeQueen(row, col, board);
            if (row + 1 === n) {
                count++;
            }
            else {
                count = backTrackNQueen(row + 1, count, board);
            }
            removeQueen(row, col, board);
        }
    }
    return count;
}


var isNotUnderAttact = function (row, col, board){
    if (board[row][col] > 0) {
        return false;
    }
    else {
        return true;
    }
};

var placeQueen = function (row, col, board) {
    const n = board.length;
    for (let i = 0; i <  board[row].length; i++) {
        board[row][i]++;
    }
    for (let i = 1; (row - i) >= 0; i++) {
        board[row - i][col]++;
        if (col - i >= 0) {
            board[row - i][col - i]++;
        }
        if (col + i < n) {
            board[row - i][col + i]++;
        }
    }
    for (let i = 1; (row + i) < n; i++) {
        board[row + i][col]++;
        if (col - i >= 0) {
            board[row + i][col - i]++;
        }
        if (col + i < n) {
            board[row + i][col + i]++;
        }
    }
};

var removeQueen = function (row, col, board) {
    const n = board.length;
    for (let i = 0; i <  board[row].length; i++) {
        board[row][i]--;
    }
    for (let i = 1; (row - i) >= 0; i++) {
        board[row - i][col]--;
        if (col - i >= 0) {
            board[row - i][col - i]--;
        }
        if (col + i < n) {
            board[row - i][col + i]--;
        }
    }
    for (let i = 1; (row + i) < n; i++) {
        board[row + i][col]--;
        if (col - i >= 0) {
            board[row + i][col - i]--;
        }
        if (col + i < n) {
            board[row + i][col + i]--;
        }
    }
};

totalNQueens(4)