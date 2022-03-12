'''
973. K Closest Points to Origin https://leetcode.com/problems/k-closest-points-to-origin/
'''

class Solution:
    def kClosest(self, points: list[list[int]], k: int) -> list[list[int]]:
        dis_list = []
        
        for i in range(len(points)):
            dis = points[i][0]*points[i][0] + points[i][1]*points[i][1]
            dis_list.append((dis, i))
        
        pivot = self.quick_select(dis_list=dis_list, start=0, end=len(points) - 1, k=k)

        result = []

        for it in dis_list:
            if it[0] <= pivot:
                result.append(points[it[1]])

        return result
    
    def quick_select(self, dis_list: list, start: int, end: int, k: int) -> int:

        pivot = dis_list[int((start + end) / 2)][0]

        i = start
        j = end
        t = start

        while t <= j:
            if dis_list[t][0] < pivot:
                dis_list[i], dis_list[t] = dis_list[t], dis_list[i]
                i += 1
                t += 1
            elif dis_list[t][0] > pivot:
                dis_list[t], dis_list[j] = dis_list[j], dis_list[t]
                j -= 1
            else:
                t += 1
        
        if i - start >= k:
            return self.quick_select(dis_list=dis_list, start=start, end=i-1, k=k)
        elif j - start + 1 >= k:
            return pivot
        else:
            return self.quick_select(dis_list=dis_list, start=j+1, end=end, k=k-(j-start+1))