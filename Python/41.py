'''
41. First Missing Positive https://leetcode.com/problems/first-missing-positive/
'''
class Solution:
    def firstMissingPositive(self, nums: list[int]) -> int:
        
        n = len(nums)
        rets = [-1] * n
        for i in range(n):
            if nums[i] <= 0 or nums[i] > n:
                continue
            else:
                if rets[nums[i] - 1] != nums[i]:
                    rets[nums[i] - 1] = nums[i]
        
        for i in range(n):
            if i + 1 != rets[i]:
                return i + 1
        return n + 1