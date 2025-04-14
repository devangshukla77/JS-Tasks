var arr = [12,132,35,4,534,6,5,4,6,7,"de","De"];

function ansSet(arr)
{
var ansSet = new Set();
arr.forEach((x) => {
    ansSet.add(x);
});

// console.log(ansSet);
return ansSet;
}

console.log(ansSet(arr));