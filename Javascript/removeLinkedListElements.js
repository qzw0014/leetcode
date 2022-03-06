/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let keepPointer = null, loopPointer = head, newHead = null;
    while(loopPointer) {
        if (loopPointer.val != val) {
            if (keepPointer === null) {
                keepPointer = loopPointer;
                newHead = keepPointer;
                loopPointer = loopPointer.next;
            }
            else {
                keepPointer.next = loopPointer;
                keepPointer = loopPointer;
                loopPointer = loopPointer.next;
            }
        }
        else {
            loopPointer = loopPointer.next;
        }
        if (loopPointer === null && keepPointer !== null) {
            keepPointer.next = loopPointer;
        }
    }
    return newHead;
};