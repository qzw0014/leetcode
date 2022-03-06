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
var preorderTraversal = function (root) {
    let nums = new Array(), node = root;
    preorder(node, nums);
    return nums;
};

var preorder = function (node, nums) {
    if (node === null) {
        return;
    }
    nums.push(node.val);
    if (node.left) {
        preorder(node.left, nums);
    }
    if (node.right) {
        preorder(node.right, nums);
    }
}