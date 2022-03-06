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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (root === null) {
        return false;
    }
    return pathSum(root, targetSum);
};

var pathSum = function (node, target) {
    console.log("Node: "+node.val+" Target: "+target)
    if (node.val === target) {
        if (node.left === null && node.right === null) {
            return true;
        }
    }
    if (node.left && pathSum(node.left, target - node.val)) {
        return true;
    }
    if (node.right && pathSum(node.right, target - node.val)) {
        return true;
    }
    return false;
}
