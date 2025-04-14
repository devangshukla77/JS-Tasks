var arr = [2,7,8,8,6,1,6,3];

function specialArray(arr) {
    let bool = true;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            if (arr[i] % 2 !== 0) {
                bool = false;
                break;
            }
        } else {
            if (arr[i] % 2 === 0) {
                bool = false;
                break;
            }
        }
    }
    return bool;
}

console.log(specialArray(arr));