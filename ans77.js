var arr = [1,2,3,3,-345,-6,-7,-8,18,9];

function Sum(arr) {
    var pSum = 0;
    var Nsum = 0;
    for(let i = 0; i<arr.length; i++) {
        if(arr[i] > 0) {
            pSum += arr[i];
        } else {
            Nsum += arr[i];
        }
    }

    var ans = [pSum, Nsum];
    return ans;
}

console.log(Sum(arr));