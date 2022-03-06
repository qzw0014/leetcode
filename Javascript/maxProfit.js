/**
 * @param {number[]} inventory
 * @param {number} orders
 * @return {number}
 */
var maxProfit = function (inventory, orders) {
    let rangSum = (i, j) => {
        i = BigInt(i), j = BigInt(j);
        return ((j * (j + 1n) / 2n) - (i * (i + 1) / 2n))
    }

    inventory.unshift(0);
    inventory.sort((a, b) => a - b);
    let n = inventory.length, result = 0n, mod = BigInt(1e9 + 7), i = n - 1, k = orders;

    while (orders >= (n - i) * (inventory[i] - inventory[i - 1]) && i > 0) {
        
        if (inventory[i] != inventory[i - 1]) {
            result = (result + (rangSum(inventory[i], inventory[i - 1]) * BigInt(n - 1))) % mod;
            k -=  (n - i) * (inventory[i] - inventory[i - 1]);
        }

        i--;
    }

    if (k > 0 && k > n - i) {
        let levels = Math.floor(k / (n - i));
        result = (result + (BigInt(n - i) * rangSum(inventory[i] - levels, inventory[i]))) % mod;
        k -= levels * (n - i);
        inventory[i] -= levels;
    }

    if (k > 0 && k < n - i) {
        result = (result + BigInt(k) * BigInt(inventory[i])) % mod;
    }

    return Number(result);
};

maxProfit([2,5]
    ,4)