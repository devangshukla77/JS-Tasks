
function RemoveSpec(str) {
    
    var spec = [".", "!", "@", "#", "$", "%", "^", "&","*", "(",")" , "\\"];

    var ans = "";
    
    var strArr = str.split("");
    console.log(strArr)
    
    for(let i = 0; i<strArr.length; i++) {
        if(!spec.includes(strArr[i])) {
        ans+=strArr[i];
        
        }
    }
    
    return ans;
}


console.log(RemoveSpec("the quick brown\ fox!"))