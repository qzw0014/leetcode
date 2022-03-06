/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let listArray = linkListToArray(head);
    if (listArray.length === 1) {
        return true;
    }
    let headIndex = 0, tailIndex = listArray.length - 1;
    while (headIndex < tailIndex) {
        if (listArray[headIndex] != listArray[tailIndex]) {
            return false;
        }
        headIndex++;
        tailIndex--;
    }
    return true;
};

var linkListToArray = (head) => {
    let result = [], node = head;
    while(node) {
        result.push(node.val);
        node = node.next;
    }
    return result;
}