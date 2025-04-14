var arr = [[3,4], [3,8,3], [9,3], [5,3], [4,3], [6, 3], [8]];

function search(arr, n) {
    var bool = false;
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === n) {
            bool = true;
            break;
        }
    }
    
    return bool;
}

function OmniPresent(arr, n) {
    var bool = true;
    
    arr.forEach((x) => {
        if(!search(x, n)) {
            bool = false;
        }
    })
    return bool;
}

console.log(OmniPresent(arr, 3));