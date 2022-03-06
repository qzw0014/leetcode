from itertools import count
from typing import OrderedDict
from unittest import result


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        map = {}
        for i in nums:
            if i in map:
                map[i] += 1
            else:
                map[i] = 1
        index = 0
        result = []
        for item in sorted(map.items(), key=lambda x: x[1], reverse=True):
            if index < k:
                result.append(item[0])
                index += 1
            else: 
                break
        return result

        