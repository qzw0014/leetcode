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
var invertTree = function (root) {
    travelTree(root);
    return root;
};


let travelTree = function (node) {
    if (node === null) {
        return;
    }
    travelTree(node.left);
    travelTree(node.right);
    const tmp = node.left;
    node.left = node.right;
    node.right = tmp;
}