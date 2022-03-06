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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
    return search(root, val)
};

var search = function (node, val) {
    if (node.val === val) {
        return node;
    }
    if (node.val < val && node.right !== null) {
        return search(node.right, val);
    }
    if (node.val > val && node.left !== null) {
        return search(node.left, val);
    }
    return null
}