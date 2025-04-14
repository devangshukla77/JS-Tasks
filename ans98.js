var str = "Hello000000 my name is lemillion";

function LongestWord(str) {
    var strArr = str.split(' ');
    
    var ans = "";
    
    strArr.forEach((x) => {
        if(x.length > ans.length) {
            ans = x;
        }
    })
    
    return ans;
}

console.log(LongestWord(str))