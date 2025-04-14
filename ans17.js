var arr = [1,1];

function isWhole(arr) {
    var sum = 0;
    arr.forEach((x) => {
        sum += x;
    });
    var n = arr.length - 1;
    var avg = sum/n;
    
    if(Number.isInteger(avg)) {
        return true;
    } else if(avg === 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isWhole(arr));