var arr = ["p", "q", "r","s"];


function UppercaseMap(arr) {
    var obj = {};
    
    var key = arr;
    var val = [];
    // console.log(val)
    
    arr.forEach((x) => {
        val.push(x.toUpperCase());
    })
    
    // console.log(val)
    for(let i = 0; i<arr.length; i++) {
        obj[key[i]] = val[i]
    }
    
    return obj;
}

console.log(UppercaseMap(arr));