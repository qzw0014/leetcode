/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    const isPrime = [];
    for (let i = 2; i < n; i++) {
        isPrime[i] = true;
    }
    for (let i = 2; i * i < n; i++) {
        if (!isPrime[i]) {
            continue;
        }
        for (let j = i * i; j < n; j+=i) {
            isPrime[j] = false;
        }
    }
    let result = 0;
    for (let i = 0; i < n; i++) {
        if (isPrime[i]) {
            result++;
        }
    }
    return result;
};