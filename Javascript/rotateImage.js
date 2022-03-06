/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    transpose(matrix);
    reflect(matrix);
};

var transpose = function (matrix) {
    for (let i = 0; i< matrix.length; i++) {
        for (let j = i + 1; j < matrix.length; j++) {
            const tmp = matrix[j][i];
            matrix[j][i] = matrix[i][j];
            matrix[i][j] = tmp;
        }
    }
}

var reflect = function (matrix) {
    const n = matrix.length;
    for (let i = 0; i< matrix.length; i++) {
        for (let j = 0; j < Math.floor(matrix.length / 2) ; j++) {
            const tmp = matrix[i][j];
            matrix[i][j] = matrix[i][n - j - 1];
            matrix[i][n - j - 1] = tmp;
        }
    }
}