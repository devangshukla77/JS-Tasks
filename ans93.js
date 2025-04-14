var str = "Matt";

function Replace(str) {
    str.toLowerCase().split('').sort().join();
    var ans = "";
    
    ans.push
    for(let i = 0; i<str.length-1; i++) {
        if(str.charAt(i) !== str.charAt(i+1)) {
            ans+="[";
        } else {
            ans+="]";
        }
    }
    if(str.charAt(str.length-1) !== str.charAt(str.length - 2)) {
        ans +="[";
    } else {
        ans+="]";
    }
    return ans;
}

console.log(Replace(str));
