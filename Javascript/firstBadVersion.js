/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 */
isBadVersion = function (version) {
    if (version < 1150769282) {
        return false;
    }
    else {
        return true;
    }
};

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    n = 1420736637;
    //return function (n) {
        let left = 1, right = n;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            let checkResult = isBadVersion(mid);
            if (checkResult) {
                if (mid === 1) {
                    return 1
                }
                else {
                    let preVersion = isBadVersion(mid - 1);
                    if (preVersion) {
                        if (mid - 1 === 1) {
                            return mid - 1;
                        }
                        else {
                            right = mid - 1;
                        }
                    }
                    else {
                        return mid;
                    }
                }
            }
            else {
                // mid is good version
                if (mid === n) {
                    // mid is last version
                    return -1;
                }
                else {
                    // mid is not last version
                    let nextVersion = isBadVersion(mid + 1);
                    if (nextVersion) {
                        return mid + 1;
                    }
                    else {
                        if (mid + 1 === n) {
                            return -1;
                        }
                        else {
                            left = mid + 1
                        }
                    }
                }
            }
        }
        return -1;
    //};
};

solution(isBadVersion);

