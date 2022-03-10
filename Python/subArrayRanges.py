'''
2104. Sum of Subarray Ranges https://leetcode.com/problems/sum-of-subarray-ranges/
'''
class Solution:
    def subArrayRanges(self, nums: List[int]) -> int:
        
        n = len(nums)
        stack = []
        
        next_smaller = [n] * n
        for i in range(n):
            while len(stack) != 0 and nums[stack[-1]] > nums[i]:
                next_smaller[stack[-1]] = i
                stack.pop()
            stack.append(i)
        
        stack.clear()

        prev_smaller = [-1] * n
        for i in range(n - 1, -1, -1):
            while len(stack) != 0 and nums[stack[-1]] >= nums[i]:
                prev_smaller[stack[-1]] = i
                stack.pop()
            stack.append(i)

        stack.clear()

        next_greater = [n] * n
        for i in range(n):
            while len(stack) != 0 and nums[stack[-1]] < nums[i]:
                next_greater[stack[-1]] = i
                stack.pop()
            stack.append(i)
        
        stack.clear()

        prev_greater = [-1] * n
        for i in range(n - 1, -1, -1):
            while len(stack) != 0 and nums[stack[-1]] <= nums[i]:
                prev_greater[stack[-1]] = i
                stack.pop()
            stack.append(i)

        result = 0
        for i in range(n):
            l = prev_greater[i]
            r = next_greater[i]
            result += nums[i] * (i - l) * (r - i)
        for i in range(n):
            l = prev_smaller[i]
            r = next_smaller[i]
            result -= nums[i] * (i - l) * (r - i)
        return result
