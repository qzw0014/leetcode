/**
 * @param {string[]} wordsDict
 */
var WordDistance = function (wordsDict) {
    this.wordsDict = wordsDict;
};

/** 
 * @param {string} word1 
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function (word1, word2) {
    let i1 = -1, i2 = -1;
    let minDis = this.wordsDict.length;
    for (let i = 0; i < this.wordsDict.length; i++) {
        if (this.wordsDict[i] === word1) {
            i1 = i;
        }
        else if (this.wordsDict[i] === word2) {
            i2 = i;
        }
        if (i1 != -1 && i2 != -1) {
            minDis = Math.min(minDis, Math.abs(i1 -i2));
        }
    }
    return minDis;
};

/** 
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(wordsDict)
 * var param_1 = obj.shortest(word1,word2)
 */