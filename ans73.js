var arr = [0,2,3,4,5,3,6,78,3];


function indexSum(arr, n) {
    var sum = 0;
    
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === n) {
            // console.log(i)
            sum += i;
        }
    }
    return sum;
}


console.log(indexSum(arr, 3));