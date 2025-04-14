var arr1 = [1,2];
var arr2 = [11,22,34,56,5,6,76,78,79,9];



    

function addArray(arr1, arr2) {
var n1 = arr1.length;
var mid = n1/2;
var n2 = arr2.length - 1;
    var ans = [];
    for(let i=0; i<mid; i++) {
        ans.push(arr1[i]);
    }
    
    for(let i=0; i<=n2; i++) {
        ans.push(arr2[i]);
    }
    
    for(let i=mid; i<n1; i++) {
        ans.push(arr1[i]);
    }
    
    console.log(ans);
}

addArray(arr1,arr2);