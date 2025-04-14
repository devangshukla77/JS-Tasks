function arraySort(...arr) {
    var ans = [];

    arr.forEach((x) => {
        ans.push(...x);
    });
    // console.log(ans)
    ans.sort((x, y) => x - y);
    // console.log(ans)
    return ans;
}

console.log(arraySort([12, 2, 4], [1, 2, 4, 5], [1, 23, 4, 5]));