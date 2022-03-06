/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function (n, edges) {
    const adjTable = [];
    for (let i = 0; i < n; i++) {
        adjTable[i] = [];
    }
    for (let i = 0; i < edges.length; i++) {
        let edge = edges[i];
        adjTable[edge[0]].push(edge[1]);
        adjTable[edge[1]].push(edge[0]);
    }
    let parent = new Map()
    let stack = [0];
    parent.set(0, -1);
    while(stack.length > 0) {
        let currentNode = stack.pop();
        for (let i = 0; i < adjTable[currentNode].length; i++) {
            if (parent.get(currentNode) === nextNode) {
                continue;
            }
            if (parent.has(nextNode)) {
                return false;
            }
            stack.push(nextNode);
            parent.set(nextNode, currentNode);
        }
    }
    return parent.size === n;
};

validTree(
    5,
    [[0,1],[0,2],[0,3],[1,4]])