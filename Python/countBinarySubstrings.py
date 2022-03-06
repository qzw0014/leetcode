class Solution:
    def countBinarySubstrings(self, s: str) -> int:
        count_map = {
            '0': 0,
            '1': 0,
        }
        flag = 0
        prev_item = ''
        result = 0
        for item in s:
            if (prev_item == ''):
                prev_item = item
            if (prev_item != item):
                flag += 1
                if (flag == 2):
                    result += min(count_map[k] for k in count_map.keys())
                    count_map[item] = 1
                    flag = 1
                    prev_item = item
                else:
                    count_map[item] += 1
                    prev_item = item
            else:
                count_map[item] += 1
        if (flag == 1):
            result += min(count_map[k] for k in count_map.keys())
        return result

instance = Solution()
instance.countBinarySubstrings(s="00110011")