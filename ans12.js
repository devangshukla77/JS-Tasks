var str = ["df","DSFD","SFSFSDF","SFSDFsdeffs","e"];

function sortStr(str) {
    for(let i=0; i<str.length; i++) {
    for(let j=i+1; j<str.length; j++) {
        if(str[i].length > str[j].length) {
            var temp = str[i];
            str[i] = str[j];
            str[j] = temp;
        }
    } 
}

console.log(str);
}

sortStr(str);