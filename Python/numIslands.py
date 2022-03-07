'''
leetcode 200. Number of Islands https://leetcode.com/problems/number-of-islands/
'''


class Solution:
    def remove_land(self, start: str, width: int, heigh: int, grid: list) -> None:
        queue = [start]
        while len(queue) != 0:
            coord = queue.pop(0).split(',')
            x = int(coord[0])
            y = int(coord[1])
            grid[x][y] = '0'
            if x - 1 >= 0 and grid[x - 1][y] == '1':
                tmp = f'{x-1},{y}'
                if not tmp in queue:
                    queue.append(tmp)
            if x + 1 < heigh and grid[x + 1][y] == '1':
                tmp = f'{x + 1},{y}'
                if not tmp in queue:
                    queue.append(tmp)
            if y - 1 >= 0 and grid[x][y - 1] == '1':
                tmp = f'{x},{y - 1}'
                if not tmp in queue:
                    queue.append(tmp)
            if y + 1 < width and grid[x][y + 1] == '1':
                tmp = f'{x},{y + 1}'
                if not tmp in queue:
                    queue.append(tmp)

    def numIslands(self, grid: List[List[str]]) -> int:
        heigh = len(grid)
        width = len(grid[0])
        island = 0
        for x in range(heigh):
            for y in range(width):
                if grid[x][y] == '1':
                    island += 1
                    self.remove_land(start=f'{x},{y}', width=width, heigh=heigh, grid=grid)
        return island
