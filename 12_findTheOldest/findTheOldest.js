const findTheOldest = function(arr) {
    const thisYear = new Date().getFullYear();
    
    return arr.reduce((res, person) => {
        const age = (person.yearOfDeath || thisYear) - person.yearOfBirth;
        return age > res.age ? { person, age } : res;
    }, { person: null, age: 0 }).person;      
    
};

// Do not edit below this line
module.exports = findTheOldest;
