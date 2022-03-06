class Solution:
    def suggestedProducts(self, products: List[str], searchWord: str) -> List[List[str]]:
        products.sort()
        result = []
        for i in range(len(searchWord)):
            tmp = []
            sub_word = searchWord[0: i + 1]
            j = 0
            while j < len(products):
                prefix = products[j][0: i + 1]
                if prefix == sub_word:
                    tmp.append(products[j])
                if len(tmp) == 3:
                    break
                j += 1
            result.append(tmp)
        return result
            