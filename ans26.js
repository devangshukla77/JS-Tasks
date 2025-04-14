function MaxSum(arr) {
    
    
    // arr.sort();
    // console.log(arr.sort());
    arr.sort(function(a, b){return a-b})
    // console.log(arr.sort(function(a, b){return a-b}));
    var len = arr.length- 5;
    var sum = 0;
    for(var i = len; i<arr.length; i++) {
        sum+=arr[i];
    }
    return sum;
}
// var arr = [1,1,0, 1,3,10, 10, 10, 10, 1];
var arr = [1,2,3,4,5,6,7,8,9,10];

console.log(MaxSum(arr));