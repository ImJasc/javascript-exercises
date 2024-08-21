const fibonacci = function(number) {
    if (number < 0) {
        return "OOPS";
    }else if (parseInt(number) === 0){
        return 0;
    }

    let value = [1, 1];
    for (let index = 2; index < parseInt(number); index++) {
        value[index] = value[index-2] + value[index-1];        
    }

    return value[number-1];
};

// Do not edit below this line
module.exports = fibonacci;
