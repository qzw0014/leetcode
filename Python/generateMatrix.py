'''
59. Spiral Matrix II https://leetcode.com/problems/spiral-matrix-ii/
'''
class Solution:
    def generateMatrix(self, n: int) -> list[list[int]]:
        result_matrix = []
        for i in range(n):
            tmp = ['0'] * n
            result_matrix.append(tmp)
        result_matrix[0][0] = 1
        v_left = 0
        v_right = n - 1
        h_left = 0
        h_right = n - 1
        data = 1
        while True:
            if v_right < v_left:
                break
            for i in range(v_left, v_right + 1):
                result_matrix[h_left][i] = data
                data += 1
            h_left += 1
            if h_right < h_left:
                break
            for i in range(h_left, h_right + 1):
                result_matrix[i][v_right] = data
                data += 1
            v_right -= 1
            if v_right < v_left:
                break
            for i in range(v_right, v_left - 1, -1):
                result_matrix[h_right][i] = data
                data += 1
            h_right -= 1
            if h_right < h_left:
                break
            for i in range(h_right, h_left - 1, -1):
                result_matrix[i][v_left] = data
                data += 1
            v_left += 1
        return result_matrix


a = Solution()
print(a.generateMatrix(4))