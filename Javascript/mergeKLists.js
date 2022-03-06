/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    let pointers = [];
    let head = null;
    let currentPointer = null;
    for (let i = 0; i < lists.length; i++) {
        if (lists[i] !== null)
            pointers.push(lists[i]);
    }
    while(pointers.length > 0) {
        let minNode = null;
        let min = Number.MAX_VALUE;
        let minNodeIndex = null;
        for (let i = 0; i < pointers.length; i++) {
            if (pointers[i].val < min) {
                minNode = pointers[i];
                min = minNode.val;
                minNodeIndex = i;
            }
        }
        if (head === null) {
            head = minNode;
            currentPointer = head;
        }
        else {
            currentPointer.next = minNode;
            currentPointer = minNode;
        }
        pointers.splice(minNodeIndex, 1);
        if (minNode.next !== null) {
            pointers.push(minNode.next);
        }
    }
    return head;
};