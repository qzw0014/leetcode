/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function (costs) {
    for (let i = costs.length - 2; i >= 0; i--) {
        costs[i][0] = costs[i][0] + Math.min(costs[i + 1][1], costs[i + 1][2]);
        costs[i][1] = costs[i][1] + Math.min(costs[i + 1][0], costs[i + 1][2]);
        costs[i][2] = costs[i][2] + Math.min(costs[i + 1][0], costs[i + 1][1]);
    }
    return Math.min(...costs[0]);
};