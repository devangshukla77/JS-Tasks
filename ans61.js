//a: 4, e: 3, i:1 , o:0, s:5

var str = "javascript is cool";

function Hacker(str) {
    var chrArr = str.split('');
    // console.log(chrArr);
    // let result = text.replace("Microsoft", "W3Schools");
    for(let i =0; i<chrArr.length; i++) {
    if( chrArr[i] === 'a') {
        chrArr[i] = '4';
    }
    if(chrArr[i] === 'e') {
        chrArr[i] = '3';
    }
    if(chrArr[i] === 'i') {
        chrArr[i] = '1';
    }
    if(chrArr[i] === 'o') {
        chrArr[i] = '0';
    }
    if(chrArr[i] === 's') {
        chrArr[i] = '5';
    }
    }
  var ans ="";
  for(let i=0; i<chrArr.length; i++) {
      ans+=chrArr[i];
  }
  
    return ans;
}

console.log(Hacker(str))