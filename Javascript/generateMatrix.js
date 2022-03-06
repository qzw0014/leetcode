/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let hengYou = 0, zongXia = n -1;
    let hengZou = n -1, zongShang = 0;
    let data = 1;
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix.push([]);
    }
    while (true) {
        if (zongXia < zongShang) {
            break;
        }
        data = addVaule(matrix, [hengYou, zongShang], [hengYou, zongXia], true, data);
        hengYou++;
        if (hengYou > hengZou) {
            break;
        }
        data = addVaule(matrix, [hengYou, zongXia], [hengZou, zongXia], false, data);
        zongXia--;
        if (zongXia < zongShang) {
            break;
        }
        data = addVaule(matrix, [hengZou, zongXia], [hengZou, zongShang], true, data);
        hengZou--;
        if (hengZou < hengYou) {
            break;
        }
        data = addVaule(matrix, [hengZou, zongShang], [hengYou, zongShang], false, data);
        zongShang++;
    }
    return matrix;
};


/**
 * @param {number[][]} matrix
 * @param {number[]} start
 * @param {number[]} end
 * @param {boolean} direction heng - true, zong- false
 * @param {number} data
 * @returns {number}
 */
let addVaule = function(matrix, start, end, direction, data) {
    let fixPoint = direction ? start[0] : start[1];
    let startPoint = direction? start[1] : start[0];
    let endPoint = direction? end[1] : end[0];
    if (startPoint > endPoint) {
        for (let i = startPoint; i >= endPoint; i--) {
            if (direction) {
                matrix[fixPoint][i] = data;
            }
            else {
                matrix[i][fixPoint] = data;
            }
            data++
        }
    }
    else {
        for (let i = startPoint; i <= endPoint; i++ ) {
            if (direction) {
                matrix[fixPoint][i] = data;
            }
            else {
                matrix[i][fixPoint] = data;
            }
            data++
        }
    }
    return data;
}