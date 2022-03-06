/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
    let i = 0, j = 0;
    const dnaSet = new Map(); 
    while(j < s.length) {
        if (j - i + 1 < 10) {
            j++;
        }
        else if (j - i + 1 === 10) {
            const dna = s.slice(i, j + 1);
            if (dnaSet.has(dna)) {
                const times = dnaSet.get(dna);
                dnaSet.set(dna, times + 1);
            }
            else {
                dnaSet.set(dna, 1);
            }
            i++; 
            j++;
        }
    }
    const result = [];
    dnaSet.forEach((value, key) => {
        if (value > 1) {
            result.push(key);
        }
    });
    return result;
};

findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT")