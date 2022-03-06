/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    paragraph = paragraph.toLowerCase();
    const paraArray = paragraph.split(' ');
    const paraMap = new Map();
    for (let i = 0; i <  paraArray.length; i++) {
        let word = paraArray[i].match(/[a-z]*/g)[0]
        if (!banned.includes(word)) {
            const val = paraMap.has(word) ? paraMap.get(word) : 0;
            paraMap.set(word, val + 1);
        }
    }
    const result = [...paraMap.entries()].reduce((a, e) => e[1] > a[1] ? e : a);
    return result[0];
};

mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit."
,["hit"])