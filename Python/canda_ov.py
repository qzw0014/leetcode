'''
vo2 https://www.1point3acres.com/bbs/thread-864861-1-1.html
'''

def print_number(input_str: str) -> list:

    rets = []
    n = len(input_str)
    for i in range(n):
        if len(rets) == 0:
            rets.append({
                f'{input_str[i]}': 1
            })
        elif input_str[i] in rets[-1]:
            rets[-1][input_str[i]] += 1
        else:
            rets.append({
                f'{input_str[i]}': 1
            })
    return rets

print(print_number('aaabbbccc'))
print(print_number('aaabcca'))
print(print_number('aaabbbccc'))