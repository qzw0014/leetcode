/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
    let node  = head;
    falttenList(node);
    return head;
};

var falttenList = function (node) {
    while(node) {
        if (node.child !== null) {
            const childTail = falttenList(node.child);
            if (node.next) {
                childTail.next = node.next;
                node.next.prev = childTail;
                node.next = node.child;
                node.child.prev = node;
                node.child = null;
                node = childTail.next;
            }
            else {
                node.next = node.child;
                node.child.prev = node;
                node.child = null;
                return childTail;
            }
        }
        if (node.next) {
            node = node.next;
        }
        else {
            return node;
        }
    } 
}