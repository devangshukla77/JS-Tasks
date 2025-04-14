var digit =9834827;

function digiRevArr(digit) {
    var ans = [];
    while(digit>0) {
    let temp = digit % 10;
    ans.push(temp);
    digit = Math.floor(digit / 10);
    }
    
    return ans
}

console.log(digiRevArr(digit))