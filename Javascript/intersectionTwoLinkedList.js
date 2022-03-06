/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    negListValue(headA);
    let node = headB;
    while(node) {
        if (node.val < 0) {
            negListValue(headA);
            return node;
        }
        node = node.next;
    }
    negListValue(headA);
    return null;
};

var negListValue = function (head) {
    let node  = head;
    while (node) {
        node.val = 0 - node.val;
        node = node.next; 
    }
}