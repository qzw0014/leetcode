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
var addTwoNumbers = function (l1, l2) {
    let node1 = l1, node2 = l2, carry = 0, node = null, head = null;
    while (node1 && node2) {
        let value = (node1.val + node2.val + carry) % 10;
        carry = Math.floor((node1.val + node2.val + carry) / 10);
        const newNode = {
            val: value,
            next: null
        }
        if (head === null) {
            head = newNode;
            node = head;
        }
        else {
            node.next = newNode;
            node = node.next;
        }
        node1 = node1.next;
        node2 = node2.next;
    }
    if (node1 !== null) {
        while (node1) {
            let value = (node1.val + carry) % 10;
            carry = Math.floor((node1.val + carry) / 10);
            const newNode = {
                val: value,
                next: null
            }
            node.next = newNode;
            node = node.next;
            node1 = node1.next;
        }
    }
    if (node2 !== null) {
        while (node2) {
            let value = (node2.val + carry) % 10;
            carry = Math.floor((node2.val + carry) / 10);
            const newNode = {
                val: value,
                next: null
            }
            node.next = newNode;
            node = node.next;
            node2 = node2.next;
        }
    }
    if (carry > 0) {
        const newNode = {
            val: carry,
            next: null
        }
        node.next = newNode;
    }
    return head;
};