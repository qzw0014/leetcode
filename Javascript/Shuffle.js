/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this._nums = [...nums];
    this._shuffleArray = [...nums];
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    this._shuffleArray = [...this._nums]
    return this._nums
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    for (let i = this._shuffleArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this._shuffleArray[i], this._shuffleArray[j]] = [this._shuffleArray[j], this._shuffleArray[i]];
    }
    return this._shuffleArray;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */