var str = [1, 1, "111"];

function matchItem(str) {
    var str2 ="";
    var n = str.length -1;
    for(let i = 0; i<str.length - 1; i++) {
        str2 += str[i];
    }
    console.log(str2 + " " + str[n]);   
    if(str2 === str[n]) {
        return true;
    } else {
        return false;
    }
}

console.log(matchItem(str));