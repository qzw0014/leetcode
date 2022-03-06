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
var maxDepth = function (root) {
    let result = deep(root, 1);
    return result;
};

var deep = function (node, depth) {
    if (node === null) {
        return 0;
    }
    let leftDepth = depth, rightDepth = 0, currentDepth = 0;
    if (node.left) {
        leftDepth = deep(node.left, depth + 1);
    }
    if (node.right) {
        rightDepth = deep(node.right, depth + 1);
    }
    let maxDepth = Math.max(currentDepth, leftDepth, rightDepth);
    return maxDepth;
}