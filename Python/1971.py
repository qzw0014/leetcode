'''
1971. Find if Path Exists in Graph https://leetcode.com/problems/find-if-path-exists-in-graph/
'''



class Solution:
    def validPath(self, n: int, edges: list[list[int]], source: int, destination: int) -> bool:
        vist = [False] * n
        path_table = []
        for i in range(n):
            path_table.append(list())

        for edge in edges:
            path_table[edge[0]].append(edge[1])
            path_table[edge[1]].append(edge[0])
        
        bfs_queue = [source]

        while len(bfs_queue) > 0:
            cur_node = bfs_queue.pop(0)
            if cur_node == destination:
                return True
            vist[cur_node] = True
            next_nodes = path_table[cur_node]
            for next in next_nodes:
                if next == destination:
                    return True
                elif not vist[next]:
                    bfs_queue.append(next)
        
        return False
