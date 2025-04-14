//Not completed

var matrix = [
    ['A', 'B', 'C', 'D', 'E'],
    ['F', 'G', 'H', 'I', 'J'],
    ['K', 'L', 'M', 'N', 'O'],
    ['P', 'Q', 'R', 'S', 'T'],
    ['U', 'V', 'W', 'X', 'Y'],
    ['Z', 'A', 'B', 'C', 'D']
  ];
  
  
  function countChr(matrix) {
    var obj = {};
    var row = matrix.length;
    var col = matrix[0].length;
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        var key = matrix[i][j];
        var val = 1;
        if (key in obj) {
          val = obj[key] + 1;
        }
        obj[key] = val;
      }
    }
   console.log(obj);
   
   
   
  }
  console.log(countChr(matrix));