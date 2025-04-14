var arr = [12,90,75];

function WarOnNumber(arr) {
    var evenSum = 0;
    var oddSum = 0;
    
    for(let i = 0; i<arr.length; i++) {
        if(arr[i] % 2) {
            evenSum += arr[i];
        } else {
            oddSum += arr[i];
        }
    }
    
    if(evenSum > oddSum) {
        return evenSum - oddSum;
    } else {
        return oddSum - evenSum;
    }
}

console.log(WarOnNumber(arr));