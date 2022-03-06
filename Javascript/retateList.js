/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (head === null) {
        return head;
    }
    const lenTail = countListSize(head);
    const length = lenTail.length, tailNode = lenTail.tail;
    const rotateNumber = k % length;
    if (rotateNumber === 0) {
        return head;
    }
    let node = head;
    for (let i = 1; i < length - rotateNumber; i++) {
        node = node.next;
    }
    tailNode.next = head;
    head = node.next;
    node.next = null;
    return head;
};


var countListSize = function (head) {
    let length = 0, tail = null, node = head;
    while (node) {
        length++;
        if (node.next) {
            node = node.next;
        }
        else {
            break;
        }
    }
    tail = node;
    return {
        length: length,
        tail: tail
    }
}