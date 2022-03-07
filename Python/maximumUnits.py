'''
leetcode 1710. Maximum Units on a Truck https://leetcode.com/problems/maximum-units-on-a-truck/
'''

class Solution:
    def maximumUnits(self, boxTypes: List[List[int]], truckSize: int) -> int:
        boxTypes.sort(key = lambda item: item[1], reverse = True)
        max_load = 0
        for i in range(len(boxTypes)):
            if boxTypes[i][0] <= truckSize:
                max_load += boxTypes[i][0] * boxTypes[i][1]
                truckSize -= boxTypes[i][0]
            else:
                max_load += truckSize * boxTypes[i][1]
                break
        return max_load
