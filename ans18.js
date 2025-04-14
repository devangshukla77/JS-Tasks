var arr = [1,-32,23,-9];

function absSum(arr) {
    var sum = 0;
    arr.forEach((x) => {
        sum += Math.abs(x);
    });
    return sum;
}
console.log(absSum(arr));