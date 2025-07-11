const palindromes = function (strtest) {
    let strlow = strtest.toLowerCase();
    strlow = strlow.replace(/[^\w\s\']|_/g,"");
    //  strlow.replace(/[^\w\s\']|_/g, "")
    let str = strlow.replace(/\s/g, "");
    console.log(str);
    let i = 0;
    let j = str.length - 1;
    console.log(i + " == " + j);
    while(i <j) {
        if(str.charAt(i) != str.charAt(j)) {
            return false;
        }
        // console.log(i + " == " + j);
        i++;
        j--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
