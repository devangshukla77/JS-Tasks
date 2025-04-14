var arr = [3,4,9];

function OddEven(arr, n) {
    while(n>0) {
        for(let i= 0; i<arr.length; i++) {
            if(arr[i] % 2 === 0) {
                arr[i] -= 2;
            } else {
                arr[i] +=2;
            }
        }
        n--;
    }
    return arr;
}

console.log(OddEven(arr, 3))