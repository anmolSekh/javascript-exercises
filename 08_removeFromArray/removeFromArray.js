const removeFromArray = function() {
    let arr = arguments[0];
    let newarr = [];
    //maybe use filter
    for(i = 1; i < arguments.length; i++) {
        // When 1 item gets removed and next item needs to get removed the array shifts in size and rwemoves the wrong one
        // let index = arr.indexOf(arr[i]);
        // console.log(arguments.length)
        // arr.splice(index, 1);
        while(arr.indexOf(arguments[i]) != -1) {
            arr.splice(arr.indexOf(arguments[i]), 1);
        }
        
        console.log(arr);
    }
    // console.log(arr)
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
