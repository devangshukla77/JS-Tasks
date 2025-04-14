var arr = ["Batman", "Superman", "Aquaman", "Wonder-Woman", "Green-Lantern", "Flash", "Hawkgirl", "Martian-Manhunter", "Cyborg", "Green-Arrow"];

function SuperHero(arr) {
    var ans = [];
    var man = "";
    arr.forEach((x) => {
        man = x.charAt(x.length-3) + x.charAt(x.length-2) + x.charAt(x.length -1);
        // console.log(man);
        
        if(man === "man") {
            ans.push(x);
        }
    })
    return ans;
}

console.log(SuperHero(arr));