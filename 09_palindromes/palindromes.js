const palindromes = function (Str) {
    let re = /[\W_]/g;
    let puntuationless = Str.toLowerCase().replace(re ,"");
    let reversedString = puntuationless.split("").reverse().join("");
     
    return puntuationless === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
