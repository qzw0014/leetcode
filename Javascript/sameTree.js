/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (p === null && q === null) {
        return true;
    }
    if (p === null || q === null) {
        return false;
    }
    const queueP = [p], queueQ = [q];
    while (queueP.length > 0) {
        const nodeP = queueP.shift();
        const nodeQ = queueQ.shift();
        if (!check(nodeP, nodeQ)) {
            return false;
        }
        if (nodeP.left !== null || nodeQ.left !== null) {
            queueP.push(nodeP.left);
            queueQ.push(nodeQ.left);
        }
        if (nodeP.right !== null || nodeQ.right !== null) {
            queueP.push(nodeP.right);
            queueQ.push(nodeQ.right);
        }
    }
    return true; 
};


var check = function (p, q) {
    if (p === null && q === null) {
        return true;
    }
    if (p === null || q === null) {
        return false;
    }
    else {
        if (p.val === q.val) {
            return true;
        }
        else {
            return false;
        }
    }
}