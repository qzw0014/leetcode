/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    if (root === null) {
        return null;
    }
    let queue1 = [root], queue2 = [];
    while (queue1.length > 0) {
        let node = queue1.shift();
        if (node.left) {
            queue2.push(node.left);
        }
        if (node.right) {
            queue2.push(node.right);
        }
        if (queue1.length === 0) {
            node.next = null;
            if (queue2.length > 0) {
                queue1 = queue2;
                const tmpQueue = new Array();
                queue2 = tmpQueue;
            }
        }
        else {
            node.next = queue1[0];
        }
    }
    return root;
};