function arraySort(...arr) {
    var sum = 0;
    arr.forEach((x) => {
        let pdt = 1;
        x.forEach((y) => {
            pdt *= y;
        })
        sum += pdt;
    })
    
    return sum;
}

console.log(arraySort([12, 2, 4], [1, 2, 4], [1, 23, 4]));