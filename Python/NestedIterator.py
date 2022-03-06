# """
# This is the interface that allows for creating nested lists.
# You should not implement it, or speculate about its implementation
# """
#class NestedInteger:
#    def isInteger(self) -> bool:
#        """
#        @return True if this NestedInteger holds a single integer, rather than a nested list.
#        """
#
#    def getInteger(self) -> int:
#        """
#        @return the single integer that this NestedInteger holds, if it holds a single integer
#        Return None if this NestedInteger holds a nested list
#        """
#
#    def getList(self) -> [NestedInteger]:
#        """
#        @return the nested list that this NestedInteger holds, if it holds a nested list
#        Return None if this NestedInteger holds a single integer
#        """

class NestedIterator:
    def __init__(self, nestedList):
        self.l = []
        for item in nestedList:
            if item.isInteger():
                self.l.append(item)
            else:
                self.l += self.ser(item)
        self.i = 0
        self.j = len(self.l)
    
    def ser(self, x):
        l = []
        for i in x.getList():
            if i.isInteger():
                l.append(i)
            else:
                l += self.ser(i)
        return l

    def next(self) -> int:
        if self.i < self.j:
            self.i += 1
            return self.l[self.i - 1]
        else:
            self.i = 1
            return self.l[self.i - 1]
    
    def hasNext(self) -> bool:
        if self.i >= self.j:
            return False
        else:
            return True
         
# Your NestedIterator object will be instantiated and called as such:
# i, v = NestedIterator(nestedList), []
# while i.hasNext(): v.append(i.next())