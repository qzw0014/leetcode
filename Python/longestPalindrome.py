class Solution:
    def longestPalindrome(self, s: str) -> str:
        if len(s) == 1:
            return s
        sub_str = s[0]
        for i in range(len(s)):
            next_i = i + 1
            if next_i < len(s) and s[next_i] == s[i]:
                tmp_str = s[i:(next_i + 1)]
                left = i - 1
                right = next_i + 1
                while left >= 0 and right < len(s) and s[left] == s[right]:
                    tmp_str = s[left:(right + 1)]
                    left -= 1
                    right += 1
                if len(tmp_str) > len(sub_str):
                    sub_str = tmp_str
            next_i = i + 2
            if next_i < len(s) and s[next_i] == s[i]:
                tmp_str = s[i:(next_i + 1)]
                left = i - 1
                right = next_i + 1
                while left >= 0 and right < len(s) and s[left] == s[right]:
                    tmp_str = s[left:(right + 1)]
                    left -= 1
                    right += 1
                if len(tmp_str) > len(sub_str):
                    sub_str = tmp_str
        return sub_str
