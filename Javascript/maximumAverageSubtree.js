/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maximumAverageSubtree = function (root) {
    let maxAverage = 0;

    /**
     * 
     * @param {TreeNode} node 
     * @returns {number[]}
     */

    let postOrder = function (node) {
        if (node === null) {
            return [0, 0];
        }
        const leftData = postOrder(node.left);
        const rightData = postOrder(node.right);
        const totalNodes = leftData[1] + rightData[1] + 1;
        const totalSum = leftData[0] * leftData[1] + rightData[0] * rightData[1] + node.val;
        const average = totalSum / totalNodes;
        if (average > maxAverage) {
            maxAverage = average;
        }
        return [average, totalNodes];
    }

    postOrder(root);

    return maxAverage;

};

