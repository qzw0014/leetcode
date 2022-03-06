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
 * @return {TreeNode}
 */
var upsideDownBinaryTree = function (root) {
    return reconnect(root, null, null);
};

/**
 * 
 * @param {TreeNode} node 
 * @param {TreeNode} parentNode 
 * @param {TreeNode} rightNode 
 * @returns {TreeNode}
 */
let reconnect = function (node, parentNode, rightNode) {
    if (node === null) {
        return parentNode;
    }
    const root = reconnect(node.left, node, node.right);
    node.left = rightNode;
    node.right = parentNode;
    return root;
} 