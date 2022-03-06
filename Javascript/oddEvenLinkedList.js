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
var oddEvenList = function (head) {
    let index = 1, node = head, even = null, odd = null, evenHead = null, oddHead = null;
    while(node) {
        if (index % 2 === 0) {
            if(evenHead === null) {
                evenHead = node;
                even = node;
            }
            else {
                even.next = node;
                even = node;
            }
        }
        else {
            if (oddHead === null) {
                oddHead = node;
                odd = node;
            }
            else {
                odd.next = node;
                odd = node;
            }
        }
        node = node.next;
        index++;
    }
    if (oddHead) {
        odd.next = evenHead;
    }
    if (even) {
        even.next = null;
    }
    return oddHead;
};