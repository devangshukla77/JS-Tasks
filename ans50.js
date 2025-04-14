var arr = [];

function SumArray(arr) {
   var sum = 0;
  
   for(let i=0; i<arr.length; i++) {
       if(typeof(arr[i]) === "number") {
         sum += arr[i];
       }
       else {
       sum = sum + 0;
       }
   }
   
   return sum;
}

console.log(SumArray(arr))