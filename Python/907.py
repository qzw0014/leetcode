'''
907. Sum of Subarray Minimums https://leetcode.com/problems/sum-of-subarray-minimums/
'''

from itertools import count


class Solution:
    def sumSubarrayMins(self, arr: list[int]) -> int:
        n = len(arr)
        stack = []
        
        next_smaller = [n] * n
        for i in range(n):
            while len(stack) != 0 and arr[stack[-1]] > arr[i]:
                tmp = stack.pop()
                next_smaller[tmp] = i
            stack.append(i)
        
        stack.clear()

        prev_smaller = [-1] * n
        for i in range(n - 1, -1, -1):
            while len(stack) != 0 and arr[stack[-1]] >= arr[i]:
                tmp = stack.pop()
                prev_smaller[tmp] = i
            stack.append(i)

        sum = 0
        module = 10**9 + 7
        for i in range(n):
            l = prev_smaller[i]
            r = next_smaller[i]
            count = (i - l) * (r - i) % module
            sum = (sum + arr[i] * count) % module
        return sum