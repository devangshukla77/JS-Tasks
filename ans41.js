function seondLargest(arr) {
    if(arr.length<1) return 0;
    arr.sort();
    var sec = arr[arr.length - 2];
    return sec;
}
var arr = [];
console.log(seondLargest(arr));