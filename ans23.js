function multiply4(n) {
    var bool = false;
    
    if(n % 4 === 0) {
        bool = true;
    }
    
    return bool;
}

function Amplify(n) {
    var arr = [];
    
    for(let i=1; i<=n; i++) {
        if(multiply4(i)) {
            arr.push(i*10);
            continue;
        }
        arr.push(i);
    }
    return arr;
    
}

console.log(Amplify(25))