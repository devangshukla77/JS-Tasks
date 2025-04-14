var arr = [12,132,35,4,534,6,5,4,6,7];

function ansSet(arr)
{
    var ans =[];
    arr.sort();
    for(let i=0;i<arr.length;i++)
    {
         if(!(arr[i-1] == arr[i]))
            {
                ans.push(arr[i]);
            }
        
    }
    return ans;
}

console.log(ansSet(arr));

// var ansSet = new Set();
// arr.forEach((x) => {
//     ansSet.add(x);
// });

// // console.log(ansSet);

// ansSet.forEach((x) => {
//     ans.push(x);
// });

// console.log(ans);
