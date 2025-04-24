var arr = [[[[[[[[[]]]]]]]]];

function isArray(arr) {
    return Array.isArray(arr);
}

function depth(arr) {
    if (!isArray(arr)) {
        return 0;
    }

    let maxDepth = 0;

    for (let i = 0; i < arr.length; i++) {
        maxDepth = Math.max(maxDepth, depth(arr[i]));
    }

    return 1 + maxDepth;
}

console.log(depth(arr));
