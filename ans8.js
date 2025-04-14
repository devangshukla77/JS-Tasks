var arr1 = [1,2];
var arr2 = [6,56,78];



function nestedArr(arr1, arr2) {
    var n1 = arr1.length-1;
    var n2 = arr2.length-1;

// console.log(n1 +" " + n2);
    if(n1>=n2) {
        return true;
    } else {
        return false;
    }
}

console.log(nestedArr(arr1, arr2));
