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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    const nums = [];
    inorder(root, nums);
    return nums;
};

var inorder = function (node, nums) {
    if (node === null) {
        return;
    }
    if (node.left) {
        inorder(node.left, nums);
    }
    nums.push(node.val);
    if (node.right) {
        inorder(node.right, nums);
    }
}