var arr1 = [1,2,3,4];
var arr2 = [4,3,2,1];

function Puzzle(arr1, arr2) {
    var ans = [];

    for(let i = 0; i < arr1.length; i++){
        ans.push(arr1[i] + arr2[i]);
    }
    // console.log(ans)
    var bool = true;
    for(let i = 1; i<ans.length; i++) {
        if(ans[i] != ans[i-1]) {
            bool = false;
        } 
    }
    return bool;
}

console.log(Puzzle(arr1, arr2)); 