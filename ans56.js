var arr = [11,11,3,4,56,7,8,2,89,90];

function purgeAnd(arr) {
    var ans = [];
    arr.sort((a, b) => a - b);
    // console.log("arr: " + arr);
    ans.push(arr[0]);
    for(let i = 1; i<arr.length; i++) {
        if(arr[i] != arr[i-1]) {
            ans.push(arr[i]);
        }
    }
    return ans;
}

console.log(purgeAnd(arr));