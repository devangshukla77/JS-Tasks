var str = "NENESSWW";

function Home(str) {
    var count = 0;
    
    for(let i =0; i<str.length; i++) {
        if(str.charAt(i) === "N") {
            count++;
        }
        else if(str.charAt(i) === "S") {
            count--;
        }
        else if(str.charAt(i) === "W") {
            count++;
        } else{
            count--;
        }
    }
    if(!count) {
        return true;
    } else {
        return false;
    }
}

console.log(Home(str))