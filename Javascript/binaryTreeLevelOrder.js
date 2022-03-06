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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let result = [], tmpArray = [];
    if (root === null) {
        return result;
    }
    let queue = [
        {
            node: root,
            level: 0
        }
    ];
    let currentLevel = 0;
    while (queue.length > 0) {
        let item = queue.shift();
        let node = item.node, level = item.level;
        if (currentLevel != level) {
            result.push(tmpArray);
            tmpArray = [];
            currentLevel++;
        }
        tmpArray.push(node.val);
        if (node.left) {
            const leftNode = {
                node: node.left,
                level: level + 1
            };
            queue.push(leftNode);
        }
        if (node.right) {
            const rightNode = {
                node: node.right,
                level: level + 1
            };
            queue.push(rightNode);
        }
    }
    result.push(tmpArray);
    return result;
};