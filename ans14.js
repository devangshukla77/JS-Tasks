var arr = [1,2,4457,7,889,9,3];


function checkEven(x) {
        if(x%2 == 0) {
            return true;
        } else {
            return false;
        }
    };
var ans = [];

arr.forEach((x) => {
    if(checkEven(x)) {
        ans.push(x);        
    }
})

console.log(ans);