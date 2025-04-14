var matrix = [[ 10, 0, 1, 1 ],
					   [11, 0, 10, 1 ],
					   [ 0, 10, 11, 1 ],
					   [ 1, 11, 10,10 ] ];

function evenSum(matrix) {
    let row  = matrix.length;
    let col = matrix[0].length;
    
    let sum = 0;
    for(let i = 0; i<row; i++) {
        
        for(let j =0; j<col; j++) {
            if(matrix[i][j] % 2 === 0) {
     
               sum += matrix[i][j];
            }
        }
    }
    
    return sum;
}

console.log(evenSum(matrix));