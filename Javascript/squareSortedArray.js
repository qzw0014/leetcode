/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    const negSubArray = nums.filter(it => {return it < 0});
    const postSubArray = nums.filter(it => {return it >= 0});
    let result = []
    if (negSubArray.length === 0) {
        postSubArray.forEach(it => {
            result.push(it*it);
        });
        return result;
    }
    if (postSubArray.length === 0) {
        for (index = negSubArray.length - 1; index >= 0; index-- ){
            result.push(negSubArray[index] * negSubArray[index]);
        }
        return result;
    }
    let i = negSubArray.length - 1, j = 0;
    while (true) {
        const firstItem = negSubArray[i] * negSubArray[i];
        const secondItem = postSubArray[j] * postSubArray[j];
        if (firstItem < secondItem) {
            result.push(firstItem);
            if (i === 0) {
                postSubArray.slice(j).forEach(it => {
                    result.push(it * it);
                });
                break;
            }
            else {
                i--;
            }
        }
        else {
            result.push(secondItem);
            if (j === postSubArray.length - 1) {
               for (let index = i; index >= 0; index--) {
                   result.push(negSubArray[index] * negSubArray[index]);
               }
               break
            }
            else {
                j++;
            }
        }
    }
    return result;
};
console.log(sortedSquares([-3,-1,0]));
