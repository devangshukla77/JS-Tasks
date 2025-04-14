var arr = [4,3,4];

function IncrementTop(arr) {
    var inc = 0;
    
    for(let i =1; i<arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
            inc += arr[i - 1] - arr[i];
            arr[i] = arr[i - 1];
        }
    }
    
    return inc;
}

console.log(IncrementTop(arr))