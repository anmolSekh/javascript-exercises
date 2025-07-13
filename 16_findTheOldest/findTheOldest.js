const findTheOldest = function(people) {
    // let oldest = undefined;
    // let oldestAge = 0;
    // const currentYear = new Date().getFullYear();
    // for(i = 0; i < people.length; i++) {
    //     let age = 0;
    //     if(people[i].yearOfDeath == undefined) {
    //         age = currentYear - people[i].yearOfBirth;
    //     } else {
    //         age = people[i].yearOfDeath - people[i].yearOfBirth;
    //     }
    //     // console.log(people[i].yearOfDeath);
    //     if(age > oldestAge) {
    //         oldestAge = age;
    //         oldest = people[i];
    //     }
    // }
    
    const yod = function(year) {
        if(!year) {
            year =  new Date().getFullYear();
        }

        return year;
    }

    return people.reduce((oldest, current) => {
        
        const oldestAge = (yod(oldest.yearOfDeath) - oldest.yearOfBirth);
        const currentAge = (yod(current.yearOfDeath) - current.yearOfBirth);
        return oldestAge < currentAge ? current : oldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
