var arr = [123,1234];

function digit2Array(n) {
    var digi = [];
    var s = 0;
    
    while(n>0) {
        let temp = n%10;
        digi.push(temp);
        n = Math.floor(n / 10);
    }
    digi.forEach((x) => {
        s += x;
    })
    return s;
}

function sumDigi(arr) {
    var sum = 0; 
    arr.forEach((x) => {
        sum += digit2Array(x);
    })
    
    return sum;
}

console.log(sumDigi(arr))

