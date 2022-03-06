/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    return travel(root, p, q);
};


/**
 * 
 * @param {TreeNode} node 
 * @param {TreeNode} p 
 * @param {TreeNode} q 
 */
let travel = function (node, p, q) {
    if (p.val < node.val && q.val < node.val) {
        if (node.left !== null) {
            return travel(node.left, p, q);
        }
        return node; 
    }
    else if (p.val > node.val && q.val > node.val) {
        if (node.right !== null) {
            return travel(node.right, p, q);
        }
        return node;
    }
    else {
        return node;
    }
}