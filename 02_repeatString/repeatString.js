const repeatString = function(str, looptime) {
    let finalstring = ''
    for (let index = 0; index < looptime; index++) {        
        finalstring = finalstring+str;
    }
    return finalstring;
};

// Do not edit below this line
module.exports = repeatString;
