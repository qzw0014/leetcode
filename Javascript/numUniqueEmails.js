/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
    const unique = [];
    for (let i = 0; i < emails.length; i++) {
        const parts = emails[i].split('@');
        const localName = []
        for (let j = 0; j < parts[0].length; j++) {
            const charCode = parts[0].charCodeAt(j);
            if (charCode >= 97 && charCode <= 122) {
                localName.push(parts[0].charAt(j))
            }
            else if (charCode === 43) {
                break;
            }
        }
        parts[0] = localName.join('');
        const finalString = parts.join('@');
        if (!unique.includes(finalString)) {
            unique.push(finalString);
        }
    }
    return unique.length
};