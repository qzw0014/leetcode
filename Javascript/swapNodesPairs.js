/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    return swap (head);
};

var swap = function (node) {
    if (node === null) {
        return null;
    }
    if (node.next === null) {
        return node;
    }
    let secNode = node.next;
    let nextHead = swap(secNode.next);
    secNode.next = node;
    node.next = nextHead;
    return secNode;
}