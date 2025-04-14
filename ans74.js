var matrix = [[ 0, 0, 1, 1 ],
					   [1, 0, 0, 1 ],
					   [ 0, 0, 1, 1 ],
					   [ 1, 1, 0, 0 ] ];

function negativeIMage(matrix) {
    let row  = matrix.length;
    let col = matrix[0].length;
    for(let i = 0; i<row; i++) {
        
        for(let j =0; j<col; j++) {
            if(matrix[i][j]) {
     
                matrix[i][j] = 0;
            } else {
                matrix[i][j] = 1;
            }
        }
    }
    
    return matrix;
}

console.log(negativeIMage(matrix));