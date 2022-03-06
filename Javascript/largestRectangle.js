/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    const stack = [];
    let maxArea = 0, i = 0;
    while (i < heights.length) {
        if (stack.length === 0 || heights[stack[stack.length - 1]] <= heights[i]) {
            stack.push(i);
            i++;
        }
        else {
            let tp = stack.pop();
            let areaWithTop = heights[tp] * (stack.length === 0 ? i : i - stack[stack.length - 1] - 1);
            if (maxArea < areaWithTop) {
                maxArea = areaWithTop;
            }
        }
    }

    while (stack.length != 0) {
        let tp = stack.pop();
        let areaWithTop = heights[tp] * (stack.length === 0 ? i : i - stack[stack.length - 1] - 1);
        if (maxArea < areaWithTop) {
            maxArea = areaWithTop;
        }
    }

    return maxArea;
};