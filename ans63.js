var arr = [2,3,5,6,7,-8];
    
function PSum(arr) {
    arr.sort((x,y) => y-x);
    // console.log(arr)
    var index = 0;
    for(let i = 0; i<arr.length; i++) {
        if(arr[i] < 0) {
            index = i;
            break;
        }
    }
    
    return arr[index -1] + arr[index - 2];
}

console.log(PSum(arr))