'''
1567. Maximum Length of Subarray With Positive Product https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/
'''

class Solution:
    def getMaxLen(self, nums: list[int]) -> int:
        res = 0
        i  = 0
        while i < len(nums):
            if nums[i] == 0:
                i += 1
                continue
            
            j = i
            count = 0
            first_neg = -1

            while j < len(nums) and nums[j] != 0:
                if nums[j] < 0:
                    if first_neg == -1:
                        first_neg = j
                    count += 1
                if count % 2 == 0:
                    res = max(res, j - i + 1)
                else:
                    res = max(res, j - first_neg)
                j += 1
            i = j
        
        return res