/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const n = nums.length;
    const tmpArray = new Array(n);
    const queue = [[nums[0]]];
    for (let i = 1; i < n; i++) {
        let queueLength = queue.length;
        while (queueLength > 0) {
            const tmp = queue.pop();
            for (let j = 0; j <= i; j++) {
                const combine = []
                tmp.forEach((ele, index) => {
                    if (index === j) {
                        combine.push(nums[i]);
                        combine.push(ele);
                    }
                    else if (j === i && index === i - 1) {
                        combine.push(ele);
                        combine.push(nums[i]);
                    }
                    else {
                        combine.push(ele);
                    }
                });
                queue.unshift(combine);
            }
            queueLength--;
        }
        
    }
    return queue;
};

permute([1,2,3])