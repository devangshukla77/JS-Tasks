function falsyCheck(...arr) {
    var bool = true;
    
    for(let i = 0; i<arr.length; i++) {
        if(!arr[i]) {
            bool = false;
            break;
        }
    }
    
    return bool;
   
    }

console.log(falsyCheck(NaN, true, 1));