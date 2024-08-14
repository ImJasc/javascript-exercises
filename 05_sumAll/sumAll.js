const sumAll = function(valueOne, valueTwo) {
    let sumAllValue = 0;
    if (Number.isInteger(valueOne+valueTwo)) {
        if (valueOne < 0 || valueTwo < 0) {
            return "ERROR";
        }else{
            if (valueOne > valueTwo) {
                sumAllValue = ((valueOne+valueTwo) * (valueOne/2));
            }else{
                sumAllValue = ((valueOne+valueTwo) * (valueTwo/2));
            }
            return sumAllValue;            
        }
    }else{
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
