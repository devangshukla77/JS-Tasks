var arr = [-3, 0, 8, -6];

function indexMul(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * i;
    }
    return sum;
}

console.log(indexMul(arr));