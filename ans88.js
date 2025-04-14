var mat = [
    ['A', 'B', 'C', 'D', 'E'],
    ['F', 'G', 'H', 'I', 'J'],
    ['K', 'L', 'M', 'N', 'O'],
    ['P', 'Q', 'R', 'S', 'T'],
    ['U', 'V', 'W', 'X', 'Y'],
    ['Z', 'A', 'B', 'C', 'D']
  ];
  
  function innerEle(mat) {
      var ans = [];
      var row = mat.length;
      var col = mat[0].length;
  
      for (let i = 0; i < row; i++) {
          for (let j = 0; j < col; j++) {
              if (i !== 0 && i !== row - 1 && j !== 0 && j !== col - 1) {
                  ans.push(mat[i][j]);
              }
          }
      }
  
      return ans;
  }
  
  console.log(innerEle(mat));
  