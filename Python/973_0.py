'''
973. K Closest Points to Origin https://leetcode.com/problems/k-closest-points-to-origin/
'''
import math

class Solution:
    def kClosest(self, points: list[list[int]], k: int) -> list[list[int]]:
        result = []
        for i in range(len(points)):
            point = points[i]
            z_distance = math.sqrt(abs(point[0]) + abs(point[1]))
            if len(result) == 0:
                result.append({
                    'dis': z_distance,
                    'point': point,
                })
            else:
                if len(result) <= k + 1:
                    index = len(result)
                    result.append({
                        'dis': z_distance,
                        'point': point
                    })
                else:
                    index = k
                    result[index] = {
                        'dis': z_distance,
                        'point': point
                    }
                print(result)
                while index > 0 and result[index - 1]['dis'] > result[index]['dis']:
                    tmp = result[index - 1]
                    result[index - 1] = result[index]
                    result[index] = tmp
                    index -= 1
        for i in range(k):
            result[i] = result[i]['point']
        return result[0: k]

