/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {

};

var search = function (matrix, target, start, length, high) {
    const m = start[1] + high - 1, n = start[0] + length - 1;
    const max = matrix[m - 1][n - 1];
    const min = matrix[start[0]][start[1]];
    if (target < min || target > max) {
        return false;
    }
    const midX = Math.floor(m / 2);
    const midY = Math.floor(n / 2);
    if (target === matrix[midX][midY]) {
        return true;
    }
    if (target > matrix[midX][midY]) {
        return search(matrix, target, [start[0], midY + 1], midY - start[0], n - midX - 1) |
    }
}