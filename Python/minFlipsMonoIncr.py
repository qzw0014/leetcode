class Solution:
    def minFlipsMonoIncr(self, s: str) -> int:
        p = [0]
        for x in s:
            p.append(p[-1] + int(x))
        return min(p[j] + len(s)-j-(p[-1]-p[j]) for j in range(0,len(s),1))