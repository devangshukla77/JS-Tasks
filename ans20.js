var arr = [[432,56,767],[453,67],[6,6,8,9,1,0],[34]];
var ans = [];
function maxEach(arr) {
    var maxi = 0;
    for(let i=0; i<arr.length; i++) {
        maxi = Math.max(maxi , arr[i]);   
    }
    return maxi;
}

arr.forEach((x) => {
    var t = maxEach(x);
    ans.push(t);
})

console.log(ans)