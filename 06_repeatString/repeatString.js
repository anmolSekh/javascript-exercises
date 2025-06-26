const repeatString = function(str, count) {
    if (count < 0) {
        return 'ERROR';
    }
    let newstr = "";
    for (i = 0; i < count; i++) {
        newstr += str;
    }
    return newstr;
};

// Do not edit below this line
module.exports = repeatString;
