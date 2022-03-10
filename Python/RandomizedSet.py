'''
380. Insert Delete GetRandom O(1) https://leetcode.com/problems/insert-delete-getrandom-o1/
'''
from random import randint


class RandomizedSet:

    def __init__(self):
        self.set = set()

    def insert(self, val: int) -> bool:
        is_in_set = not val in self.set
        self.set.add(val)
        return is_in_set
        
    def remove(self, val: int) -> bool:
        if val in self.set:
            self.set.remove(val)
            return True
        else:
            return False

    def getRandom(self) -> int:
        random_index = randint(0, len(self.set) - 1)
        return list(self.set)[random_index]


# Your RandomizedSet object will be instantiated and called as such:
obj = RandomizedSet()
for i in range(10):
    obj.insert(i)

for i in range(10):
    param_5 = obj.getRandom()
    print(param_5)