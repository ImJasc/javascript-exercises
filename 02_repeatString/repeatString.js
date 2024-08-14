const repeatString = function(str, looptime) {
    let finalstring = ''
    if (looptime < 0) {
        return 'ERROR';
    }else{
        for (let index = 0; index < looptime; index++) {        
            finalstring = finalstring+str;
        }
        return finalstring;
    }    
};

// Do not edit below this line
module.exports = repeatString;
