var arr = [21,2,1,3,4,45,6,67,8,9];

function evenAdd(arr) {
    var ans = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            ans += arr[i];
        }
    }
    ans = ans * arr[arr.length - 1];

    return ans;
}

console.log(evenAdd(arr));