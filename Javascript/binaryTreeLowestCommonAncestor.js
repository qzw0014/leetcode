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
    result = findP(root, p, q);
    return result.lCA;
};

var findP = function (node, p, q) {
    if (node === null) {
        return {
            p: false,
            lCA: null
        };
    }
    if (node.val === p) {
        if (findTarget(node.left, q) || findTarget(node.right, q)) {
            return {
                p: true,
                lCA: node
            };
        }
        return {
            p: true,
            lCA: null
        };
    }
    else {
        
        let result = findP(node.left, p, q);
        if (result.p) {
            if (result.lCA === null && (node.val === q || findTarget(node.right, q))) {
                result.lCA = node;
            }
            return result;
        }
        result = findP(node.right, p, q);
        if (result.p) {
            if (result.lCA === null && (node.val === q || findTarget(node.left, q))) {
                result.lCA = node;
            }
            return result;
        }
    }
}

var findTarget = function (node, target) {
    if (node === null) {
        return false;
    }
    let leftResult = false, rightResult = false;
    if (node.val === target) {
        return node;
    }
    if (node.left) {
        leftResult = findTarget(node.left, target);
    }
    if (node.right) {
        rightResult = findTarget(node.right, target);
    }
    if (leftResult) {
        return leftResult;
    }
    if (rightResult) {
        return rightResult;
    }
    return false;
}