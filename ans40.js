var arr = [1,[9] ,[2],3, [5],4];

function Unsortable(arr) {
    arr.sort((x,y) => x-y);
    
    return arr;
} 

console.log(Unsortable(arr))