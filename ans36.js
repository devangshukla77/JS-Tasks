var obj = {
    a: 1,
    b: 2
}

function obj2Array(obj) {
    var key = Object.keys(obj);
    
    var val = Object.values(obj);
    
    var ans = [];
    
    for(let i=0;i<key.length; i++) {
        var temp = [];
        
        temp.push(key[i]);
        temp.push(val[i]);
        
        ans.push(temp);
        
    }
    
    return ans;
}

console.log(obj2Array(obj))