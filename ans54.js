var arr = [10 ,1];

function factorCheck(arr) {
    var bool = true;
    
    for(let i=1; i<arr.length; i++) {
        if(arr[i] % arr[i-1] !== 0) {
            bool = false;
        }
    }
    return bool;
}

console.log(factorCheck(arr));