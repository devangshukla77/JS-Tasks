const stolenItem = {
 
}

function Loss(stolenItem) {
    var sum = 0;
    var arr = Object.values(stolenItem);
    // console.log(arr);
    
    for(let i = 0; i<arr.length; i++) {
        if(arr[i] < 0) {
            return "Not Possible"
        }
        sum += arr[i];
    }
    if(sum === 0) {
        return "Lucky You"
    } else {
    return sum;
    }
}

console.log(Loss(stolenItem))