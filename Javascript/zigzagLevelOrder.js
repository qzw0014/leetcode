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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    let result = [];
    if (root === null) {
        return result;
    }
    let nodeQueue = [root];
    let direction = true; //true ->; false <-
    while (nodeQueue.length > 0) {
        let levelResult = [];
        let nextQueue = [];
        while(nodeQueue.length > 0) {
            currentNode = nodeQueue.pop();
            if (direction) {
                levelResult.push(currentNode.val);
            }
            else {
                levelResult.unshift(currentNode.val);
            }
            if (currentNode.left !== null) {
                nextQueue.unshift(currentNode.left);
            }
            if (currentNode.right !== null) {
                nextQueue.unshift(currentNode.right);
            }
        }
        result.push([...levelResult]);
        nodeQueue = nextQueue;
        direction = !direction;
    }
    return result;
};