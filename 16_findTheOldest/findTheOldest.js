const findTheOldest = function(people) {
    let oldest = undefined;
    let oldestAge = 0;
    const currentYear = new Date().getFullYear();
    for(i = 0; i < people.length; i++) {
        let age = 0;
        if(people[i].yearOfDeath == undefined) {
            age = currentYear - people[i].yearOfBirth;
        } else {
            age = people[i].yearOfDeath - people[i].yearOfBirth;
        }
        // console.log(people[i].yearOfDeath);
        if(age > oldestAge) {
            oldestAge = age;
            oldest = people[i];
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
