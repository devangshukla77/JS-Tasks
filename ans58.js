var arr = [11,11,3,4,56,7,8,2,89,90];

function MinorArr(arr) {
    var ans = [];
    for(let i= 0;i<arr.length; i++) {
        ans.push(arr[i]);
    }
    
    for(let i=0; i<arr.length-1; i++) {
        ans.push(arr[i]);
    }
    return ans;
}

console.log(MinorArr(arr))
