var arr = [1,2,3,1,1,1,1,4,5,6,7];

function one2End(arr) {
    var ans = [];
    var count  = 0;
    for(let i = 0; i<arr.length; i++) {
        if(arr[i] === 1) {
            count++;
            continue;
        }
        
        ans.push(arr[i]);
    }
    
    for(let i = 0; i<count; i++) {
        ans.push(1);
    }
    
    return ans;
    
}

console.log(one2End(arr))