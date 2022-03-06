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
var reverseKGroup = function (head, k) {
    let stack = [];
    let current = head;
    let prev = null;
    let toEnd = true;
    while(current !== null) {
        while(current !== null && stack.length < k) {
            stack.push(current);
            current = current.next;
        }
        if (stack.length < k) {
            prev.next = stack[0];
            toEnd = false;
            break;
        }
        while(stack.length > 0) {
            if (prev === null) {
                prev = stack.pop();
                head = prev;
            }
            else {
                prev.next = stack.pop();
                prev = prev.next;
            }
        }
    }
    if (toEnd) {
        prev.next = null;
    }
    return head;
};