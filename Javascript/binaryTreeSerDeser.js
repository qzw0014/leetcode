/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    const result = [];
    if (root === null) {
        return result;
    }
    const queue = [root];
    while(queue.length > 0) {
        const node = queue.shift();
        if (node) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        }
        else {
            result.push(null);
        }
    }
    while(result[result.length -1] === null) {
        result.pop();
    }
    console.log(result);
    return result;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if (data.length === 0) {
        return null;
    }
    if (data.length === 1) {
        return treeNode(data[0]);
    }
    let index = 0;
    let child = 0;
    while (index < data.length) {
        if (data[index] === null) {
            continue;
        }
        if (typeof(data[index]) === "number" || typeof(data[index]) === "string") {
            data[index] = treeNode(data[index]);
        }
        if (child + 1 < data.length) {
            child++;
            if (typeof(data[child]) === "number" || typeof(data[child]) === "string") {
                data[child] = treeNode(data[child]);
            }
            data[index].left = data[child];
        }
        if (child + 1 < data.length) {
            child++;
            if (typeof(data[child]) === "number" || typeof(data[child]) === "string") {
                data[child] = treeNode(data[child]);
            }
            data[index].right = data[child];
        }
        index++;
    }
    return data[0];
};

var treeNode = function (val) {
    return {
        val: val,
        left: null,
        right: null,
    }   
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */