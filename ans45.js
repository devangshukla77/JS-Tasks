var str = "I am finding Nemo !";
var strArray = str.split(' ');
console.log(strArray);
function findNemo(str) {
    return str.indexOf("Nemo");    
}

console.log(findNemo(strArray));

