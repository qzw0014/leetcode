'''
239. Sliding Window Maximum https://leetcode.com/problems/sliding-window-maximum/
'''

class Solution:
    def maxSlidingWindow(self, nums: list[int], k: int) -> list[int]:
        
        dequeue = []
        n = len(nums)
        rets = []

        for i in range(n):
            
            while len(dequeue) > 0 and nums[dequeue[-1]] < nums[i]:
                dequeue.pop()
            
            dequeue.append(i)

            while len(dequeue) > 0 and dequeue[0] <= i - k:
                dequeue.pop(0)
            
            if i >= k - 1:
                rets.append(nums[dequeue[0]])
        
        return rets