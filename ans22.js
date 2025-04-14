var arr = [1,2,3,4,5,6,7,8,9,0];

function phoneNumber(arr) {
    var ans = ""
    if(arr.length < 10 && arr.length> 10) {
        return ans;
    }
    ans += "(";
  for(let  x = 0; x<3; x++) {
       if(x<10 && x>=0) {
            ans+=arr[x];       
        } else {
            return "";
        }
  }
    ans += ")";
   ans += " ";
  for(let x = 3; x<6; x++) {
       if(x<10 && x>=0) {
            ans+=arr[x];       
        } else {
            return "";
        }
  }
   ans += "-";
  for(let  x = 6; x<arr.length; x++) {
       if(x<10 && x>=0) {
            ans+=arr[x];       
        } else {
            return "";
        }
  }
  return ans;
}


console.log(phoneNumber(arr))