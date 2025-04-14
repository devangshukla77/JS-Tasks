var arr = [];

function countTrue(arr) {
    if(arr.length<1) {
        return 0;
    }
    var count =0;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === true) {
            count++;
        }
    }
    return count;
}

console.log(countTrue(arr));