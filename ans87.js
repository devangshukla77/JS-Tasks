var arr1 = [11,12,13,15];
var arr2 = [5,6,7,8,9];

function FollowOne(arr1, arr2) {
    var bool = false;
    
    for(let i=0; i<arr1.length; i++) {
        
        for(let j = 0; j<arr2.length; j++) {
            if(arr1[i] === arr2[j]) {
                bool = true;
                break;
            }
        }
    }
    
    return bool;
}

console.log(FollowOne(arr1, arr2))