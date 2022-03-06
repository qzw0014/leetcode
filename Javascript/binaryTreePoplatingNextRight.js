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
    const queue = [root];
    let level = 0, counter = 0;
    while (queue.length > 0) {
        let node = queue.shift();
        console.log(node.val);
        if (counter === Math.pow(2, level) - 1) {
            console.log("next is null")
            node.next = null;
            level++;
            counter = 0;
        }
        else {
            console.log("next is " + queue[0].val)
            node.next = queue[0];
            counter++;
        }
        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
    }
    return root;
};