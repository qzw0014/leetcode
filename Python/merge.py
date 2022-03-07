"""
leetcode 56. Merge Intervals
"""

class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key= lambda item: item[0])
        res = []
        for i in range(len(intervals)):
            if len(res) == 0:
                res.append(intervals[i].copy())
                continue
            begin = res[-1]
            end = intervals[i]
            if begin[0] == end[0] :
                if begin[1] < end[1]:
                    begin[1] = end[1]
            elif begin[1] < end[0]:
                res.append(end.copy())
            elif end[0] <= begin[1] <= end[1]:
                begin[1] = end[1]
        return res
