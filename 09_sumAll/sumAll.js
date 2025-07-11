const sumAll = function(x, y) {
    //check if x or y are ints else return error
    let sum = 0;
    // if (typeof x == "")
    if( Number.isInteger(x) == false | Number.isInteger(y) == false | x < 0 | y <0 | y < x) {
        return 'ERROR';
    }
    if(x < y) {
        for (i = x; i <= y; i++) {
            sum += i;
        }
    } else {
        for (i = y; i <= x; i++) {
            sum += i;
        }
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
