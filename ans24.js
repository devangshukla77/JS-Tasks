var arr = ["he", "nkdsf", "hfir"];

function ss(str) {
var ans ="";

arr.forEach((x) => {
    var temp = x.charAt(0);
    ans += temp;
})


  return ans.split('').sort().join('').toUpperCase();  
}


console.log(ss(arr));