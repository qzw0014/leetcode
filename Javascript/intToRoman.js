/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const digits = [];
    const roman = [];
    while(num > 0) {
        digits.push(num % 10);
        num = Math.floor(num/10);
    }
    for (let i = 0; i < digits.length; i++) {
        let number = digits[i];
        switch(i) {
            case 0:
                if (number <= 3) {
                    let tmp = ''
                    while (number > 0) {
                        tmp = tmp + 'I'
                        number--;  
                    }
                    roman.push(tmp);
                }
                else if (number === 4) {
                    roman.push('IV');
                }
                else if (number > 4 && number < 9) {
                    let tmp = 'V'
                    number = number - 5;
                    while (number > 0) {
                        tmp = tmp + 'I'
                        number--;  
                    }
                    roman.push(tmp); 
                }
                else {
                    roman.push('IX');
                }
                break;
            case 1:
                if (number <= 3) {
                    let tmp = ''
                    while (number > 0) {
                        tmp = tmp + 'X'
                        number--;  
                    }
                    roman.push(tmp);
                }
                else if (number === 4) {
                    roman.push('XL');
                }
                else if (number > 4 && number < 9) {
                    let tmp = 'L'
                    number = number - 5;
                    while (number > 0) {
                        tmp = tmp + 'X'
                        number--;  
                    }
                    roman.push(tmp); 
                }
                else {
                    roman.push('XC');
                }
                break;
            case 2:
                if (number <= 3) {
                    let tmp = ''
                    while (number > 0) {
                        tmp = tmp + 'C'
                        number--;  
                    }
                    roman.push(tmp);
                }
                else if (number === 4) {
                    roman.push('CD');
                }
                else if (number > 4 && number < 9) {
                    let tmp = 'D'
                    number = number - 5;
                    while (number > 0) {
                        tmp = tmp + 'C'
                        number--;  
                    }
                    roman.push(tmp); 
                }
                else {
                    roman.push('CM');
                }
                break;
            case 3:
                let tmp = '';
                while(number > 0) {
                    tmp = tmp + 'M';
                    number--;
                }
                roman.push(tmp);
                break;
            default:
                break;
        }
    }
    roman.reverse();
    let result = roman.join('');
    return result;
};

intToRoman(1994)