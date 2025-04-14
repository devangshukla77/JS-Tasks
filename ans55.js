var arr = [
    [1, 10, 10],
    [10, 2, 10],
    [10, 10, 3]
  ]
  
  function traceSum(arr) {
      let row = arr.length;
      let col = arr[0].length;
      var sum = 0;
      for(let i = 0; i<row; i++) {
          for(let j=0; j<col; j++) {
              if(i==j) {
                  sum += arr[i][j];
              }
          }
      }
      
      return sum;
  }
  
  console.log(traceSum(arr))