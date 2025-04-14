var arr = [1,23,45, "I",1,2,10,4,56];


function Balanceing(arr) {
    let sum = 0;
    
    for(let i = 0; i<arr.length; i++) {
        if(typeof(arr[i]) === "string") {
            break;
        }
        sum += arr[i];
    }
    
    for(let i = arr.length; i>0; i--) {
           if(typeof(arr[i]) === "string") {
            break;
        }
        sum -= arr[i];
    }
    
    
    if(sum>0) {
        return "left";
    } else {
        return "right";
    }
    
}

console.log(Balanceing(arr))