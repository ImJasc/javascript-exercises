const removeFromArray = function() {
    const arrayToBeRemoved = arguments[0];
    for (let indexArguments = 0; indexArguments < arguments.length; indexArguments++) {
        for (let indexArray = 0; indexArray < arrayToBeRemoved.length; indexArray++) {
            if (arrayToBeRemoved[indexArray] === arguments[indexArguments]) {
                arrayToBeRemoved.splice(indexArray, 1);
            }            
        }        
    }
    return arrayToBeRemoved
};

// Do not edit below this line
module.exports = removeFromArray;
