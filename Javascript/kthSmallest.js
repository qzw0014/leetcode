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
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function (root, k) {
    let result;
    let count = []
    inorder(root, count, k);
    return count[k- 1];
};


let inorder = function (node, count, k) {
    if (node === null) {
        return;
    }
    inorder(node.left, count, k);
    count.push(node.val);
    inorder(node.right, count, k);
}