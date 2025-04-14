var str = ["2111", "1111","333", "1234"];

function Identical(chr) {
    var bool = true;
    var charArr = chr.split('');
    charArr.sort();
    for(let  i =1; i<charArr.length; i++ ) {
        if(charArr[i-1] === charArr[i]) {
            bool = false;
            break;
        }
    }
    return bool;
}

function findUnique (str) {
    var ans = [];
    for(let i=0; i<str.length; i++) {
        if(Identical(str[i])) {
            ans.push(str[i]);
        }
    }
    return ans;
}

console.log(findUnique(str));