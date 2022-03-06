
var MyLinkedList = function () {
    this.root = null;
    this.length = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index >= this.length) {
        return -1;
    }
    let counter = 0, node = this.root;
    while (counter < index) {
        node = node.next;
        counter++;
    }
    return node.val;
};

/** 
 * @param {number} index
 * @return {node}
 */
MyLinkedList.prototype.getNode = function (index) {
    if (index >= this.length) {
        return -1;
    }
    let counter = 0, node = this.root;
    while (counter < index) {
        node = node.next;
        counter++;
    }
    return node;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    let newNode = {
        val: val,
        next: this.root
    }
    this.root = newNode;
    this.length++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let node = this.root;
    if (this.length === 0) {
        this.addAtHead(val);
    }
    else {
        const lastNode = this.getNode(this.length - 1);
        let newNode = {
            val: val,
            next: null
        };
        lastNode.next = newNode;
        this.length++;
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index <= this.length) {
        if (index === 0) {
            this.addAtHead(val);
        }
        else if (index === this.length) {
            this.addAtTail(val);
        }
        else {
            let newNode = {
                val: val,
                next: null
            };
            let tmpNode = this.getNode(index - 1);
            newNode.next = tmpNode.next;
            tmpNode.next = newNode;
            this.length++;
        }
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < this.length) {
        if (index === 0) {
            this.root = this.root.next;
        }
        else {
            let deleteNode = this.getNode(index);
            let preNode = this.getNode(index - 1);
            preNode.next = deleteNode.next;
        }
        this.length--;
    }
};

MyLinkedList.prototype.output = function () {
    let node = this.root;
    let output = ""
    while (node != null) {
        output = output + `${node.val} -> `
        node = node.next;
    }
    console.log(output);
}

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
 ["MyLinkedList","addAtHead","get","addAtHead","addAtHead","deleteAtIndex","addAtHead","get","get","get","addAtHead","deleteAtIndex"]
 [[],[4],[1],[1],[5],[3],[7],[3],[3],[3],[1],[4]]
var myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(7);
myLinkedList.addAtHead(2);
myLinkedList.addAtHead(1);
myLinkedList.output();
myLinkedList.addAtIndex(3, 0);
myLinkedList.output();
myLinkedList.deleteAtIndex(2);
myLinkedList.output();
myLinkedList.addAtHead(6);
myLinkedList.addAtTail(4);
myLinkedList.output();
myLinkedList.get(4);
myLinkedList.addAtHead(4);
myLinkedList.addAtIndex(5, 0);
myLinkedList.addAtHead(6);
myLinkedList.output();
