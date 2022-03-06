/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.cacheMap = new Map();
    this.head = {
        next: null
    };
    this.tail = {
        prev: null
    };
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.cacheMap.has(key)) {
        let currentNode = this.cacheMap.get(key);
        currentNode.prev.next = currentNode.next;
        currentNode.next.prev = currentNode.prev;
        currentNode.next = this.head.next;
        this.head.next.prev = currentNode;
        this.head.next = currentNode;
        currentNode.prev = this.head;
        return currentNode.val;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.cacheMap.has(key)) {
        let currentNode = this.cacheMap.get(key);
        currentNode.val = value;
        currentNode.prev.next = currentNode.next;
        currentNode.next.prev = currentNode.prev;
        currentNode.next = this.head.next;
        this.head.next.prev = currentNode;
        this.head.next = currentNode;
        currentNode.prev = this.head;
    }
    else {
        let newNode = {
            key: key,
            val: value,
            prev: null,
            next: null
        }
        newNode.next = this.head.next;
        this.head.next.prev = newNode;
        newNode.prev = this.head;
        this.head.next = newNode;
        this.cacheMap.set(key, newNode);
        if (this.cacheMap.size > this.capacity) {
            let deleteNode = this.tail.prev;
            this.cacheMap.delete(deleteNode.key);
            deleteNode.prev.next = this.tail;
            this.tail.prev = deleteNode.prev;
        }
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */