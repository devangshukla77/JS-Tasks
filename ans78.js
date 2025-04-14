function Depth(arr) {
    if (!Array.isArray(arr)) {
        return 0;
    }

    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        var temp = 1 + Depth(arr[i]);
        if (temp > count) {
            count = temp;
        }
    }
    return count;
}

var arr = [[[[[[[[[]]]]]]]]];
console.log(Depth(arr));