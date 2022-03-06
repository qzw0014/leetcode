/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (!head || !head.next) {
        return false;
    }
    let slow = head;
    let fast = head.next;
    let result = false;
    while(slow && fast) {
        if (slow === fast) {
            result = true;
            break;
        }
        if (!slow.next) {
            break;
        }
        slow = slow.next;
        if (!fast.next || !fast.next.next) {
            break;
        }
        fast = fast.next.next;
    }
    return result;
};