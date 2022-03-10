'''
901. Online Stock Span https://leetcode.com/problems/online-stock-span/
'''

from unittest import result


class StockSpanner:

    def __init__(self):
        self.index = 0
        self.stack = []
        self.records = []

    def next(self, price: int) -> int:
        if len(self.records) == 0:
            self.records.append(price)
            self.stack.append(self.index)
            self.index += 1
            return 1

        if self.records[self.stack[-1]] >= price:
            self.records.append(price)
            self.index += 1
            self.stack.append(self.index)
            return 1
 
        self.records.append(price)
        self.index += 1
        result = 0
        while len(self.stack) != 0 and self.records[self.stack[-1]] < price:
            self.stack.pop()
        if len(self.stack) == 0:
            result = self.index + 1
        else: 
            result = self.index - self.stack[-1]
        self.stack.append(self.index)
        return result


# Your StockSpanner object will be instantiated and called as such:
# obj = StockSpanner()
# param_1 = obj.next(price)