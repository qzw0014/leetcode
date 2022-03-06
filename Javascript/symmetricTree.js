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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    return levelOrder([root]);
};

var levelOrder = function (nodes) {
    logNodes(nodes);
    let levelResult = isSymmetricArray(nodes);
    if (!levelResult) {
        return false;
    }
    const nextLevel = [];
    let leaf = false;
    nodes.forEach(item => {
        
        if (item) {
            if ((item.left || item.right) && !leaf) {
                leaf = true;
            }
            nextLevel.push(item.left);
            nextLevel.push(item.right);
        }
        else {
            nextLevel.push(null);
            nextLevel.push(null);
        }
    });
    if (leaf) {
        if (levelOrder(nextLevel) && levelResult) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return levelResult;
    }
}

var isSymmetricArray = function (nodes) {
    let fIndex = 0, sIndex = nodes.length - 1;
    while (fIndex < sIndex) {
        const lNode = nodes[fIndex], rNode = nodes[sIndex];
        if (lNode === null && rNode !== null) {
            return false;
        }
        if (rNode === null && lNode !== null) {
            return false;
        }
        if (lNode !== null && rNode !== null && lNode.val != rNode.val) {
            return false;
        }
        fIndex++;
        sIndex--;
    }
    return true;
}

var logNodes = function (nodes) {
    let array = []
    nodes.forEach(item => {
        if (item) {
            array.push(item.val);
        }
        else {
            array.push(null);
        }
    });
    console.log(array);
}