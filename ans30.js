const matrix = [
    [1, 0, 1, 0],
    [0, 1, 1, 1],
    [1, 0, 0, 1]
  ];
  
  function count1(matrix) {
      var row = matrix.length;
  var col = matrix[0].length;
  var count = 0;
  for(let i = 0; i<row; i++) {
      for(let j = 0; j<col; j++) {
          if(matrix[i][j] === 1) {
              count++;
          }
      }
  }
  return count;
  // console.log(count);
  }
  console.log(count1(matrix));