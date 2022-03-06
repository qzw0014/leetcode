/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestWordDistance = function (wordsDict, word1, word2) {
    const wordMap = new Map();
    for (let i = 0; i < wordsDict.length; i++) {
        if (!wordMap.has(wordsDict[i])) {
            wordMap.set(wordsDict[i], [i]);
        }
        else {
            const tmp = wordMap.get(wordsDict[i]);
            tmp.push(i);
            wordMap.set(wordsDict[i], tmp);
        }
    }
    let minDis = wordsDict.length;
    if (word1 === word2) {
        let i = 0, j = 1;
        const indexList = wordMap.get(word1);
        while (j < indexList.length) {
            minDis = Math.min(minDis, Math.abs(indexList[i] - indexList[j]));
            i++;
            j++;
        }
    }
    else {
        let i = 0, j = 0;
        const word1Index = wordMap.get(word1);
        const word2Index = wordMap.get(word2);
        while (i < word1Index.length && j < word2Index.length) {
            minDis = Math.min(minDis, Math.abs(word1Index[i] - word2Index[j]));
            word1Index[i] < word2Index[j] ? i++ : j++;
        }

    }
    return minDis;
};

shortestWordDistance(["practice", "makes", "perfect", "coding", "makes"],
    "makes"
    , "coding");