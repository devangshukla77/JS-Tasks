var arr = [1,2,-3,-1,-2];
    
function Negative(arr) {

    var PSum = 0;
    var NSum = 0;

    for(let i= 0;i<arr.length;i++){
        if(arr[i] > 0){
            PSum += arr[i];
        }else{
            NSum +=  Math.abs(arr[i]);
        }
    }
    return NSum - PSum;
}

console.log(Negative(arr)); 