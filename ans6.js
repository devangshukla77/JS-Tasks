var sayThat = {
    1: "Mommy",
    2: "Please",
    3: "Help"
}

var arr = Object.values(sayThat);

var ans = "";
arr.forEach((x) => {
    ans += x + " ";
})

console.log(ans + `${arr[1]}`);