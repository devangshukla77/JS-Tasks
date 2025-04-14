var arr = ["true", true, 110];

function MixedmType(arr){
    for(let i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) === "string") {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1) + "!";
        } else if (typeof(arr[i]) === "boolean") {
            arr[i] = !arr[i];
        } else if(typeof(arr[i]) === "number" && arr[i] % 2 === 0) {
            arr[i] = arr[i] + 1;
        }
    }
    return arr;
}

console.log(MixedmType(arr));
