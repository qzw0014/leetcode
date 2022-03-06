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
var reverseList = function (head) {
    let node = head.next, newTail = head, newHead = head;
    while (node !== null) {
        if (node === head) {
            continue;
        }
        newTail.next = node.next;
        node.next = newHead;
        newHead = node;
        node = newTail.next;
    }
    return newHead;
};