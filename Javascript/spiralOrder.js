/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let result = [];
    let hengYou = 0, zhongXia = matrix[0].length - 1;
    let hengZou = matrix.length - 1, zhongShang = 0;
    while(true) {
        if (zhongShang > zhongXia) {
            break;
        }
        loopMaxtrix(matrix, [hengYou,zhongShang], [hengYou,zhongXia], result, true);
        hengYou++;
        if (hengYou > hengZou) {
            break;
        }
        loopMaxtrix(matrix, [hengYou, zhongXia], [hengZou, zhongXia], result, false);
        zhongXia--;
        if (zhongXia < zhongShang) {
            break;
        }
        loopMaxtrix(matrix, [hengZou, zhongXia], [hengZou, zhongShang], result, true);
        hengZou--;
        if (hengZou < hengYou) {
            break;
        }
        loopMaxtrix(matrix, [hengZou, zhongShang], [hengYou, zhongShang], result, false);
        zhongShang++
    }
    return result;
};


/**
 * @param {number[][]} matrix
 * @param {number[]} start
 * @param {number[]} end
 * @param {number[]} result
 * @param {boolean} direction
 */
let loopMaxtrix = function(matrix, start, end, result, direction) {
    const fix = direction? start[0] : start[1];
    const startPoint = direction? start[1] : start[0];
    const endPoint = direction? end[1] : end[0]
    if (startPoint < endPoint) {
        for (let i = startPoint; i <= endPoint; i++) {
            if (direction) {
                result.push(matrix[fix][i]);
            }
            else {
                result.push(matrix[i][fix]);
            }
        }
    }
    else {
        for (let i = startPoint; i >= endPoint; i--) {
            if (direction) {
                result.push(matrix[fix][i]);
            }
            else {
                result.push(matrix[i][fix]);
            }
        }
    }
}

spiralOrder([[1,2,3],[4,5,6],[7,8,9]])
