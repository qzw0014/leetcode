/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (n, k) {
    let initArray = [0];
    if (n === 1 && k === 1) {
        return initArray[k - 1];
    }
    for (let i = 2; i <= n; i++) {
        let tmp = []
        initArray.forEach(item => {
            if (item === 0 ) {
                tmp.push(0);
                tmp.push(1);
            }
            if (item === 1) {
                tmp.push(1);
                tmp.push(0);
            }
        });
        
        initArray = tmp;
        console.log(initArray)
    }
    
    return initArray[k -1];
};

kthGrammar(5, 1)