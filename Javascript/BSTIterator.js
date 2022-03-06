/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
    this.index = 0;
    this.inOrder = [];
    this.inOrderTravel(root, this.inOrder);
};

/**
 * @param {TreeNode} root
 * @param {number[]} nodeArray
 */
BSTIterator.prototype.inOrderTravel = function (root, nodeArray) {
    if (root === null) {
        return;
    }
    this.inOrderTravel(root.left, nodeArray);
    nodeArray.push(root.val);
    this.inOrderTravel(root.right, nodeArray);
}

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
    if (this.hasNext()) {
        let result = this.inOrder[this.index];
        this.index++;
        return result;
    } 
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    return this.index < this.inOrder.length;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */