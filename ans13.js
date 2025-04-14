var arr = [1,2,4457,7,889,9,3];


function cubes(x) {
    return Math.pow(x, 3);
}

var sum = 0; 

arr.forEach((x) => {
    sum += cubes(x);
})

console.log(sum);