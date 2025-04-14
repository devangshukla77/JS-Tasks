function Div(start, end, divisior) {
    
    var ans = [];
    
    for(let i = start; i<end; i++) {
        if(i%divisior === 0) {
            ans.push(i);
        }
    }
    return ans;
}


console.log(Div(15, 20, 7))