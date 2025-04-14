var arr = [2,0,null,"", 3,NaN,5,6,7,-8, NaN];
    
function findNaN(arr) {
    var index = -1;
    for(let i=0; i<arr.length; i++) {
        if(isNaN(arr[i])) {
            index = i;
            break;
        } 
    }
    
    return index;
}

console.log(findNaN(arr))