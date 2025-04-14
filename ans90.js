var arr = [ 1,2,3,4,5,10,6,78,9,10,11,12,13,14,15,16,17,18,19,20];

function Mean (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    sum =  Math.ceil(sum / arr.length);

    for(let i =0; i < arr.length; i++){
        arr[i] = sum;
    }
    return arr;
}

console.log(Mean(arr));