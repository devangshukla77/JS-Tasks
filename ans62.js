var str = ["flidSf", "lifhf","skefhiu", "wfgw"];

function toUpper(str) {
    for(let i = 0; i<str.length; i++) {
        let n = str[i].length;
        str [i] = str[i].charAt(0).toUpperCase() + str[i].substring(1, n).toLowerCase();
    }
    
    return str;
}

console.log(toUpper(str))