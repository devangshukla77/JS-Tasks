// var falsyValue = [false , 0 , ]

var arr = [1,2,false,0];
function falsy(arr) {
var ans = [];
for(let i =0; i<arr.length; i++) {
    if(arr[i]) {
        ans.push(arr[i]);
    }
}

// console.log(ans);
    return ans;
}

console.log(falsy(arr));
