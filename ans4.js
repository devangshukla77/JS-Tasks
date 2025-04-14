var shape = {
    1: "circle",
    2: "square",
    3: "rectangle",
    4: "triangle",
    5: "pentagon",
    6: "hexagon",
    7: "heptagon",
    8: "octagon",
    9: "nonagon",
    10: "decagon",
}

function shapeName(n) {
    return `nsidedShape: ${shape[n]}`;
}

console.log(shapeName(11));
