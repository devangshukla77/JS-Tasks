var arr = [1,2,3,4,56,6,78];

function firstN(arr, n) {
    var sum = 0;
    
    for(let i=0; i<n; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(firstN(arr, 4))