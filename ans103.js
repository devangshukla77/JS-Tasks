function ArrayInArray(n) {
    var arr = [];
    
    for(let i = 1; i<n; i++) {
        var temp = [];
        // arr.push(temp);
        
        for(let j = 1; j<=i; j++) {
            temp.push(i);
        }
            arr.push(temp);
    }
    
    return arr;
}

console.log(ArrayInArray(5))