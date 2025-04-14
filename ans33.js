var str = "hello";

function FirstLast(str, chr) {
   var strArr = str.split('');
   
   var ans = [];
   var first = strArr.indexOf(chr)
   var last = strArr.lastIndexOf(chr)
   
   ans.push(first);
   ans.push(last);
   
   return ans;
}

console.log(FirstLast(str, 'l'));