function jackpot(arr) {
    if (Array.isArray(arr)) {
        var count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === arr[0]) {
                count++;
            }
        }
        return count === arr.length;
    } else {
        return false;
    }
}

var arr = ["@1", "@1", "@1", "@1"];
console.log(jackpot(arr));

