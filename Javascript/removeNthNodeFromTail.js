/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function (head, n) {
    if (head.next === null && n === 1) {
        head = null;
        return head;
    }
    let node = head;
    let newTail = null;
    let counter = 0;
    while(node) {
        if (counter === n) {
            newTail = head;
        }
        if (!node.next) {
            break;
        }
        node = node.next;
        counter++;
        if (newTail) {
            newTail = newTail.next;
        }
    }
    if (!newTail) {
        return head.next;
    }
    newTail.next = newTail.next.next;
    return head;
};