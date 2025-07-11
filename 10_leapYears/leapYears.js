const leapYears = function(x) {
    if(x%400 === 0) {
        return true;
    } else if (x % 100 === 0) {
        return false;
    } else if (x % 4 === 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
