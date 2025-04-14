var arr = [1,234,456,11,6,7,8,99,100,99,54,4,12];


function Prime(n) {
    if(n<=1) {
        return false;
    }
    
    for(let i=2; i<n; i++) {
        if(n%i === 0) {
            return false;
        }
        
    }
        return true;
}

function AllPrime(arr) {
    var ans = [];
    arr.forEach((x) => {
        if(Prime(x)) {
            ans.push(x);
        }
    })
    
    return ans;
}


console.log(AllPrime(arr));