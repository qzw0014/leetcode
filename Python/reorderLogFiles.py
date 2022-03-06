class Solution:
    def reorderLogFiles(self, logs: List[str]) -> List[str]:
        dig_logs = []
        let_logs = []
        for log in logs:
            first_word = log.split(' ')[1]
            is_dig = True
            try:
                int(first_word)
            except:
                is_dig = False
            if is_dig:
                dig_logs.append(log)
            else:
                let_logs.append(log)
        let_logs_map = {}
        for let in let_logs:
            val = let.split(' ')[0]
            key = ' '.join(let.split(' ')[1:])
            if key in let_logs_map:
                let_logs_map[key].append(val)
            else:
                let_logs_map[key] = [val]
        for key in let_logs_map.keys():
            let_logs_map[key].sort()        
        sort_let_logs = sorted(let_logs_map.items(), key=lambda item: item[0])
        let_logs = []
        for i in range(len(sort_let_logs)):
            for identifier in sort_let_logs[i][1]:
                let_logs.append(identifier + ' ' + sort_let_logs[i][0])
        return let_logs + dig_logs
        
