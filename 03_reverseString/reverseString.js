const reverseString = function(input) {
    const elements = [];
    let reversedString = '';
    for (let index = 0; index < input.length; index++) {
        elements[index] = input.charAt(index);                    
    }
    
    for (let index = elements.length-1; index >= 0; index--) {
        reversedString += elements[index];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
