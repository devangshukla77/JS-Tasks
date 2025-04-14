var arr = [2,354,7,88,9090];

function sortArr(arr) {
    if(arr === null) {
        return [];
    }
    for(let i = 0; i<arr.length; i++) {
        for(let j=i+1; j<arr.length; j++) {
            if(arr[i] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log(sortArr(arr));