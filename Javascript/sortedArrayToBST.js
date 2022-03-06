/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    const root = createTree(nums);
    return root;
};

/**
 * @param {Number[]} nums
 * @returns {TreeNode}
 */
var createTree = function (nums) {
    if (nums.length === 0) {
        return null
    }
    if (nums.length === 1) {
        const node = new TreeNode(nums[0], null, null);
        return node; 
    }
    const rootIndex = Math.floor((nums.length - 1) / 2);
    const leftNode = createTree(nums.slice(0, rootIndex));
    const rightNode = createTree(nums.slice(rootIndex + 1));
    const rootNode = new TreeNode(nums[rootIndex], leftNode, rightNode);
    return rootNode;
}
