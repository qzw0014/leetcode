class MyNode:

    def __init__(self, key: int, value: int) -> None:
        self.key = key
        self.value = value
        self.prev = None
        self.next = None


class LRUCache:

    def __init__(self, capacity: int):
        self.capacity = capacity
        self.size = 0
        self.node_dict = {}
        self.head = MyNode(key=-1, value=-1)
        self.tail = MyNode(key=-2, value=-2)
        self.head.next = self.tail
        self.tail.prev = self.head

    def get(self, key: int) -> int:
        if key in self.node_dict:
            node = self.node_dict[key]
            self.__reorder_link_list__(node=node)
            return node.value
        else:
            return -1
    def put(self, key: int, value: int) -> None:
        if key in self.node_dict:
            self.node_dict[key].value = value
            self.__reorder_link_list__(self.node_dict[key])
        else:
            new_node = MyNode(key=key, value=value)
            self.__add_node_to_link_list__(new_node)


    def __reorder_link_list__(self, node: MyNode) -> None:
        node.prev.next = node.next
        node.next.prev = node.prev
        node.next = self.head.next
        self.head.next.prev = node
        node.prev = self.head
        self.head.next = node
    
    def __add_node_to_link_list__(self, node: MyNode) -> None:
        self.head.next.prev = node
        node.next = self.head.next
        node.prev = self.head
        self.head.next = node
        self.node_dict[node.key] = node
        if self.size == self.capacity:
            last_node = self.tail.prev
            last_node.prev.next = last_node.next
            last_node.next.prev = last_node.prev
            self.node_dict.pop(last_node.key)
        else:
            self.size += 1
    
    def show_list(self) -> None:
        node = self.head
        while node != None:
            if node.next != None:
                print(f'{node.value} -> ', end='')
            else:
                print(f'{node.value}', end='')
            node = node.next
        print('')
        



test = LRUCache(2)
test.show_list()

test.put(1,1)
test.show_list()

test.put(2,2)
test.show_list()

print(test.get(1))
test.show_list()

test.put(3,3)
test.show_list()

print(test.get(2))
test.show_list()

test.put(4,4)
test.show_list()

print(test.get(1))
test.show_list()

print(test.get(3))
test.show_list()

print(test.get(4))
test.show_list()

