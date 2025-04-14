var str = "happy";

function spell(str) {
    var arr =[];
    var ans ="";
    for(let i=0; i<str.length; i++) {
        var temp = str.charAt(i);
        ans+=temp
        arr.push(ans);
    }
    return arr;
}

console.log(spell(str));