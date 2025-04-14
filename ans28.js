var digit = 98765;
//  var temp = digit % 10;
//  console.log()
function Array2Dig(arr) {
    var temp = 0;
    arr.forEach((x) => {
        temp = temp * 10 + x;
    })
    return temp;
}
console.log(Array2Dig([9,8,7,6,5])); 

function dig2Array(digit) {
    var ans = [];
    while(digit>0) {
    var temp = digit % 10;
    ans.push(temp);
    // digit /= 10;
    digit = Math.floor(digit / 10);
}
return ans.reverse();
// console.log(ans.reverse());
}


console.log(dig2Array(digit))