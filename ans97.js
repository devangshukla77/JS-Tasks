var str1 ="edabit";
var str2 ="ed";


function StringMatch(str1, str2) {
    
    var count = 0;
    var chr1 = str1.split('');   
    var chr2 = str2.split('');
    
    for(let i = 0; i<chr1.length; i++) {
        let temp = chr1[i] + chr1[i+1];
        for(let j=0; j<chr1.length; j++) {
        let temp2 = chr2[j] + chr2[j+1];
            
            if( temp === temp2) {
                count++;
                break;
            }
        }
    }
    
    return count;
 
}

console.log(StringMatch(str1, str2))