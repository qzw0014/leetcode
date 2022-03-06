/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    if (num1 === '0' || num2 === '0') {
        return '0';
    }
    if (num2.length > num1.length) {
        let uuu = num1;
        num1 = num2;
        num2 = uuu;
    }
    let base = 0;
    let result = []
    let tmpB = [];
    for (let i = num2.length - 1; i >= 0; i--) {
        let charB = num2.charCodeAt(i) - 48;
        let tmp = 0;
        let innerArray = [];
        for (let j = num1.length - 1; j >= 0; j--) {
            let charA = num1.charCodeAt(j) - 48;
            tmp = tmp + (charA * charB);
            if (j === 0) {
                while (tmp != 0) {
                    innerArray.push(tmp % 10);
                    tmp = Math.floor(tmp / 10);
                }
            }
            else {
                innerArray.push(tmp % 10);
            }
            tmp = Math.floor(tmp / 10);
        }
        let baseK = base;
        base++;
        while (baseK > 0) {
            innerArray.unshift(0);
            baseK--;
        }
        let carry = 0;
        let longArr, shortArr;
        if (innerArray.length > result.length) {
            longArr = innerArray;
            shortArr = result;
        }
        else {
            longArr = result;
            shortArr = innerArray;
        }
        for (let k = 0; k < longArr.length; k++) {
            let sumTmp = 0
            if (k >= shortArr.length) {
                sumTmp = carry + longArr[k];
            }
            else {
                sumTmp = carry + longArr[k] + shortArr[k];
            }
            longArr[k] = sumTmp % 10;
            carry = Math.floor(sumTmp / 10);
        }
        while (carry != 0) {
            longArr.push(carry % 10);
            carry = Math.floor(carry / 10)
        }
        result = longArr;
    }
    result.reverse();
    return result.join('');
};

console.log(multiply("1331789514112297869753139512633768066017431670578465899940305692590313366445604440249153185776128379607342024"
,"905175220518204524894521085019700317051204034"))

