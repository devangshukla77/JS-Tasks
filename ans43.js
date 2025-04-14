function Marathon(arr) {
    if(Array.isArray(arr)) {
    var sum = 0;
    arr.forEach((x) => {
        sum += Math.abs(x);
    })
    if(sum >= 25) {
        return true;
    } else {
        return false;
    }
        
    } else {
        return 0;
    }
}
var arr = null;

console.log(Marathon(arr));