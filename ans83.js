var arr = [1,2,3,5,6,7,8];

function scalabale(arr) {
    var bool = true;
    for(let i =1; i<arr.length; i++) {
        if(!(Math.abs(arr[i-1] - arr[i]) <= 5)) {
            bool =  false;
            break;
        } else {
            bool =  true;
        }
    }
    
    return bool;
}

console.log(scalabale(arr))