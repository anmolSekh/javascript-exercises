const removeFromArray = function() {
    let arr = arguments[0];
    let newarr = [];
    for(i = 1; i < arr.length; i++) {
        let index = arr.indexOf(arr[i]) + 1;
        console.log(index)
        arr.splice(index, 1);
    }
    console.log(arr)
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
