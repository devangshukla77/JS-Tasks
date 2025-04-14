function isDetect(obj) {
    if (typeof obj === "string") {
            return true;
        }
        return false;
}

var arr = [2,"sdf", 43, 79, "da", "dasd"];

var ans = [];

for(let i=0; i<arr.length; i++) {
    if(!isDetect(arr[i])) {
        ans.push(arr[i]);
    }
}

console.log(ans);