var arr = ["DSFSD","fsEFS"];
    
function findArr(arr) {
    var count = 0;
    arr.forEach((x) => {
        if(Array.isArray(x)) {
            count++;
        }
    })
    
    return count;
}

console.log(findArr(arr));