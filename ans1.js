// volumeOfBox = ({height: 10, width:20 , length: 30 }) => 10 
function volumeOfBox(box) {
    return box["height"] * box["width"] * box["length"];
}


var box = {height: 10, width:20 , length: 30 };

var ans = volumeOfBox(box);

console.log(ans);


