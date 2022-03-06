class Solution:
    def kthFactor(self, n: int, k: int) -> int:
        small_factors = []
        big_factors = []
        for i in range(1, n + 1):
            if n % i == 0:
                f2 = n / i
                if i < f2:
                    small_factors.append(i)
                    big_factors.append(f2)
                elif i == f2:
                    small_factors.append(i)
                    break
                else:
                    break
        big_factors.reverse()
        result = small_factors + big_factors
        if len(result) < k:
            return -1
        else:
            return int(result[k - 1])
