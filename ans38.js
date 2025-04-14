function multipleArray(x, y) {
    var ans = [];
    
    for(let i=1; i<=y; i++) {
        var temp = x*i;
        ans.push(temp);
    }
    return ans;
}

console.log(multipleArray(7,5));