const fibonacci = function(n) {
    if(n < 0) return "OOPS";
    let member = 0;
    let x = 0;
    let y = 0;
    let arr = [];
    for(i = 0; i < n; i++) {
        
        if(i == 0 | i == 1) {
            member = 1;
        } else {
            member = arr[i-1] + arr[i-2];
        }
        arr.push(member);
    }
    // console.log(arr);
    if(arr.length > 0) {
        member = arr.pop();
    }
    return member; 
};

// Do not edit below this line
module.exports = fibonacci;
