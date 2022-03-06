/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let node1 = l1, node2 = l2, node = null, head = null;
    while(node1 && node2) {
        if (node1.val < node2.val) { 
            if (head === null) {
                head = node1;
                node = head;
                node1 = node1.next;
            }
            else {
                node.next = node1;
                node = node1;
                node1 = node1.next;
            }
        }
        else {
            if (head === null) {
                head = node2;
                node =  node2;
                node2 = node2.next;
            }
            else {
                node.next = node2;
                node = node.next;
                node2 = node2.next;
            }
        }
    }
    if (node1 !== null) {
        while(node1) {
            if (head === null) {
                head = node1;
                node = head;
                node1 = node1.next;
            }
            else {
                node.next = node1;
                node = node.next;
                node1 = node1.next;
            }
        }
    }
    if (node2 !== null) {
        while(node2) {
            if (head === null) {
                head = node2;
                node = head;
                node2 = node2.next;
            }
            else {
                node.next = node2;
                node = node2;
                node2 = node2.next;
            }
        }
    }
    return head;
};