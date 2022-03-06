from cgitb import reset
import re
from unittest import result
class Solution:
    def myAtoi(self, s: str) -> int:
        s = s.strip()
        num_str_list = []
        p_or_n = '+'
        if len(s) > 0 and (s[0] == '+' or s[0] == '-'):
            if s[0] == '-':
                p_or_n = s[0]
            s = s[1:len(s)]
        for s_char in s:
            if re.match('[0-9]', s_char):
                num_str_list.append(s_char)
            else:
                break
        num_str = ''.join(num_str_list)
        num_str = num_str
        result = 0
        if (len(num_str) > 0): 
            result = int(num_str)
            if p_or_n == '-':
                result = 0 - result
            if result > 2147483647:
                result = 2147483647
            if result < -2147483648:
                result = -2147483648
        return result