var obj = {
    D: 1,
    E: 2,
    F: 3,
    G: 4
};

console.log(Object.values(obj));
console.log(Object.keys(obj));

function obj2arr(obj) {
var val = Object.values(obj);
var key = Object.keys(obj);

var ans = []
var temp = "";
for(let i = 0; i<key.length; i++) {
    temp = key[i];
    var tarr = [];
    tarr.push(temp);
    tarr.push(val[i])
    ans.push(tarr);
    }
    return ans;
}
console.log(obj2arr(obj))
