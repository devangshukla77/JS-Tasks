var arr = [1,12,3,4,5,6,-7,-9,7];

function uniqueArray(arr) {
    var ans = [];
    
    arr.forEach((x) => {
        if(x>0) {
            ans.push(x);
        }
    })
    return ans;
}

console.log(uniqueArray(arr));