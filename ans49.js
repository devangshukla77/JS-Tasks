var str = [];

function Jazz(str) {
   var ans = [];
   for(let i=0; i<str.length; i++) {
       if(str[i].includes("7")) {
           ans.push(str[i]);
           continue;
       }
       else {
        let temp =  str[i] +"7";
      ans.push(temp);
       }
   }
   
   return ans;
}

console.log(Jazz(str))