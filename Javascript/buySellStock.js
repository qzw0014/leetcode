/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let i = 0;
    let pair = null;
    let buyFlag = true;
    let result = 0;
    while(i < prices.length) {
        if (i === prices.length - 1) {
            if (buyFlag) {
                break;
            }
            else {
                buyFlag = true;
                result = result + (prices[i] - prices[pair]);
            }
        }
        else if (prices[i] < prices[i + 1] && buyFlag) {
            pair = i;
            buyFlag = false;
        }
        else if (!buyFlag && prices[i] > prices[i + 1]) {
            buyFlag = true;
            result = result + (prices[i] - prices[pair]);
        }
        i++;
    }
    return result;
};