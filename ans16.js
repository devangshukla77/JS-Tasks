var obj = {
    "a": 1,
    "b": 2,
    "c":56,
    "d": 4
}


function calDiff(obj, n) {
    var sumObj = 0;
    var arr = Object.values(obj);
    console.log(arr);

    arr.forEach((x) => {
    sumObj += x;
    });
    console.log(sumObj);
    var diff = sumObj - n;
    return diff; 
}
console.log(calDiff(obj, 5));
