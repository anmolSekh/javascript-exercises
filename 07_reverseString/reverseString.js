const reverseString = function(str) {
    let reverse = ""
    for( i = str.length-1; i >= 0; i--) {
        reverse += str.charAt(i)
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
