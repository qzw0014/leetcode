/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let landQueue = [];
    let result = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                result++;
                markRead(grid, [i, j]);
            }
        }
    }
    return result;
};

/**
 * 
 * @param {character[][]} grid 
 * @param {number[]} corrdinate 
 */
let markRead = function (grid, coordinate) {
    const firstCoord = coordinate.join(',');
    let coordQueue = [firstCoord];
    while (coordQueue.length > 0) {
        coordinate = coordQueue.pop().split(',');
        const i = parseInt(coordinate[0]);
        const j = parseInt(coordinate[1]);
        grid[i][j] = '0';
        if (j + 1 < grid[i].length && grid[i][j + 1] === '1') {
            if (!coordQueue.includes(`${i},${j + 1}`)) {
                coordQueue.unshift(`${i},${j + 1}`);
            }
        } 
        if (i + 1 < grid.length && grid[i + 1][j] === '1') {
            if (!coordQueue.includes(`${i + 1},${j}`)) {
                coordQueue.unshift(`${i + 1},${j}`);
            }
        }
        if (j - 1 >= 0 && grid[i][j - 1] === '1') {
            if (!coordQueue.includes(`${i},${j - 1}`)) {
                coordQueue.unshift(`${i},${j - 1}`);
            }
        }
        if (i - 1 >= 0 && grid[i - 1][j] === '1') {
            if (!coordQueue.includes(`${i - 1},${j}`)) {
                coordQueue.unshift(`${i - 1},${j}`);
            }
        }
    }
}