class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        converted_set = {}
        for i in range(len(nums)):
            converted_set[nums[i]] = i
        for i in range(len(nums)):
            rest = target - nums[i]
            index = converted_set.get(rest)
            if index and index != i:
                return [index, i]