/**
 * @param {number[]} arr
 * @return {number}
 */
var oddEvenJumps = function (arr) {
    let result = 0;
    var findEJ = function(subArr) {
        const end = subArr.pop();
        if (subArr[subArr.length - 1] < end) {
            return;
        }
        else if (subArr[subArr.length - 1] > end) {
            findOJ(subArr);
            let i = length - 2;
            while(subArr[i] < subArr[i + 1] && subArr[i] >= end && i >= 0) {
                findOJ(subArr.slice(i + 1));
                i--;
            }
        }
        else {
            
        }
    }

    var findOJ = function(subArr) {}
};

