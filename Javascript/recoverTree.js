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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
    let first = null, mid = null, last = null, prev = null;
    var findNodes = function (root) {
        if (root === null) {
            return;
        }
        findNodes(root.left);
        if (prev !== null && root.val < prev.val) {
            if (first === null) {
                first = prev;
                mid = root;
            }
            else {
                last = root;
            }
        }
        prev = root;
        findNodes(root.right);
    }
    findNodes(root);
    if (first !== null && last !== null) {
        const tmp = first.val;
        first.val = last.val;
        last.val = tmp;
    }
    else if (first !== null && mid !== null) {
        const tmp = first.val;
        first.val = mid.val;
        mid.val = tmp;
    }
};