function matrix(n) {
    var ans = [];
    for(let i = 0;i<n; i++) {
        ans[i] = [];
        for(let j = 0; j<n; j++) {
            ans[i][j] = n;
        }
    }
    
    return ans;
}

console.log(matrix(5));