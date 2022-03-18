'''
42. Trapping Rain Water https://leetcode.com/problems/trapping-rain-water/
'''

class Solution:
    def trap(self, height: list[int]) -> int:
        n = len(height)

        stack = []
        rets = 0

        for i in range(n):
            while len(stack) > 0 and height[stack[-1]] < height[i]:
                if len(stack) > 1:
                    top = min(height[stack[-2]], height[i]) - height[stack[-1]]
                    width = i - stack[-2] - 1
                    rets += (top * width)
                stack.pop()
            stack.append(i)
        
        return rets