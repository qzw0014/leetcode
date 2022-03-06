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
var postorderTraversal = function (root) {
    const nums = [];
    postOrder(root, nums);
    return nums;
};

var postOrder = function (node, nums) {
    if (node === null) {
        return;
    }
    if (node.left) {
        postOrder(node.left, nums);
    }
    if (node.right) {
        postOrder(node.right, nums);
    }
    nums.push(node.val);
}