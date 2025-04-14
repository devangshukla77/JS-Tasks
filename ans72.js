var str = ["2111", "1111","333"];

function Identical(chr) {
    var bool = true;
    
    for(let  i =1; i<chr.length; i++ ) {
        if(chr[i-1] !== chr[i]) {
            bool = false;
            break;
        }
    }
    return bool;
}

function findIdentical (str) {

    var ans = [];
    for(let i=0; i<str.length; i++) {
        if(Identical(str[i])) {
            ans.push(str[i]);
        }
    }
    return ans;
}

console.log(findIdentical(str));