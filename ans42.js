function Clone(arr) {
    if(Array.isArray(arr)) {
         // if(arr.length <0) return [];
    var ans = [];
    arr.forEach((x) => {
        ans.push(x);
    })
    ans.push(arr);
    return ans;
    } else {
        return 0;
    }
}
var arr =null;
console.log(Clone(arr))