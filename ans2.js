var obj = {
    "Darth": "Mother",
    "Leia": "Father",
    "Han": "GrandMother",
    "Father": "GrandFather"
}

function findRelation(key) {
    var val = obj[key];
    console.log(obj[key]);
    return `Luke I am your, ${val}`;
}


console.log(findRelation("Father"));