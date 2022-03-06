/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
    const letters = [];
    const digits = [];
    const digReg = /^([a-z0-9]*)\s([0-9]*\s)*([0-9]*)$/g;
    //const letReg = /^([a-zA-Z]*[0-9]+)\s([a-z]+\s)*([a-z]*)$/g;
    for (let i = 0; i < logs.length; i++) {
        let log = logs[i];
        if (log.match(digReg)) {
            digits.push(log);
        }
        else {
            letters.push(log);
        }
    }
    letters.sort((a, b) => {
        const logNaA = a.split(' ')[0];
        const logContA = a.split(' ').slice(1).join(' ');
        const logNaB = b.split(' ')[0];
        const logContB = b.split(' ').slice(1).join(' ');
        if (logContA < logContB) {
            return -1;
        }
        if (logContA > logContB) {
            return 1;
        }
        if (logNaA < logNaB) {
            return -1;
        }
        else {
            return 1
        }
    });
    const result = letters.concat(digits)
    return result;
};

reorderLogFiles(["8 fj dzz k", "5r 446 6 3", "63 gu psub", "5 ba iedrz", "6s 87979 5", "3r 587 01", "jc 3480612", "bb wsrd kp", "b aq cojj", "r5 6316 71"])

