/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    let newList = null, node = head, newNode = newList, relationMap = new WeakMap();
    while (node) {
        const tmp = {
            val: node.val,
            next: null,
            rendom: null
        }
        relationMap.set(node, tmp);
        node = node.next;
    }
    console.log(relationMap);
    node = head;
    while (node) {
        if (node === head) {
            newList = relationMap.get(node);
            newNode = newList;
        }
        newNode.next = relationMap.get(node.next);
        newNode.random = relationMap.get(node.random);
        node = node.next;
        newNode = newNode.next;
    }
    return newList;
};