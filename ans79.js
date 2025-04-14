var arr = [1,2,34,35,6,7,89,88,99,100,10,2];

function miniPeek (arr) {
    var ans = [];
    
    for(let i=1; i<arr.length-1; i++) {
        if(arr[i-1]< arr[i] && arr[i]> arr[i+1]) {
            ans.push(arr[i]);
        }
    }
    return ans;
}

console.log(miniPeek(arr))