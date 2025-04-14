var arr1 = [3,2,10]
var arr2 = [7,3,2,1,4,6,8,9]

function subsetArray(arr1, arr2) {
  var ans = true;
  for (let i = 0; i < arr1.length; i++) {
    let temp = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        temp = true;
      }
    }
    
    if(!temp) {
        ans = false;
    }   
  }
  return ans;
}

console.log(subsetArray(arr1, arr2));