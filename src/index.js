module.exports = function solveSudoku(matrix) {
  // your solution
  // let matrix = [
  //   [6, 5, 0, 7, 3, 0, 0, 8, 0],
  //   [0, 0, 0, 4, 8, 0, 5, 3, 0],
  //   [8, 4, 0, 9, 2, 5, 0, 0, 0],
  //   [0, 9, 0, 8, 0, 0, 0, 0, 0],
  //   [5, 3, 0, 2, 0, 9, 6, 0, 0],
  //   [0, 0, 6, 0, 0, 0, 8, 0, 0],
  //   [0, 0, 9, 0, 0, 0, 0, 0, 6],
  //   [0, 0, 7, 0, 0, 0, 0, 5, 0],
  //   [1, 6, 5, 3, 9, 0, 4, 7, 0]
  // ];
  let unknownX = [];
  let unknownY = [];
  let sud = []; // Создание соразмерного массива
  sud.length = 9;
  for (let c=0; c<9; c++) {
    sud[c] = [];
    sud[c].length = 9;
  };
// Поиск пустых элементов судоку
  for (let i=0; i<9; i++){  
    for (let j=0; j<9; j++){
      if (matrix[i][j] == 0) {
        unknownX.push(j); // Запись координаты X
        unknownY.push(i); // Запись координаты Y
        sud[i][j] = [];   // Создание пустого массива в пустом элементе
      } else {sud[i][j] = matrix[i][j]};
    };
  };  // На выходе 3 массива. В первом координаты X, во втором - Y. 3 - судоку с пустыми массивами вместо 0 
// Добавление элементов массива в ячейку с пустым массивом. Массив содержит числа, которые не могут быть в этой ячейке.
  for (let k=0; k<unknownX.length; k++) {  
    let x = unknownX[k];
    let y = unknownY[k];
    let p = [];
    for (i=0; i<9; i++) {
      if (matrix[i][x] != 0) {
        let value = matrix[i][x];
        p.push(value);
      };
    };
    for (i=0; i<9; i++) {
      if (matrix[y][i] != 0) {
        value = matrix[y][i];
        p.push(value);
      };
    };
    if (x==0 || x==1 || x==2) {
      if (y==0 || y==1 || y==2) {
        for (i=0; i<3; i++) {
          for (j=0; j<3; j++) {
            if (matrix[i][j] != 0) {
              value = matrix[i][j];
              p.push(value);
            };
          };
        };
      };
      if (y==3 || y==4 || y==5) {
        for (i=3; i<6; i++) {
          for (j=0; j<3; j++) {
            if (matrix[i][j] != 0) {
              value = matrix[i][j];
              p.push(value);
            };
          };
        };
      };
      if (y==6 || y==7 || y==8) {
        for (i=6; i<9; i++) {
          for (j=0; j<3; j++) {
            if (matrix[i][j] != 0) {
              value = matrix[i][j];
              p.push(value);
            };
          };
        };
      };
    };
    if (x==3 || x==4 || x==5) {
      if (y==0 || y==1 || y==2) {
        for (i=0; i<3; i++) {
          for (j=3; j<6; j++) {
            if (matrix[i][j] != 0) {
              value = matrix[i][j];
              p.push(value);
            };
          };
        };
      };
      if (y==3 || y==4 || y==5) {
        for (i=3; i<6; i++) {
          for (j=3; j<6; j++) {
            if (matrix[i][j] != 0) {
              value = matrix[i][j];
              p.push(value);
            };
          };
        };
      };
      if (y==6 || y==7 || y==8) {
        for (i=6; i<9; i++) {
          for (j=3; j<6; j++) {
            if (matrix[i][j] != 0) {
              value = matrix[i][j];
              p.push(value);
            };
          };
        };
      };
    };
    if (x==6 || x==7 || x==8) {
      if (y==0 || y==1 || y==2) {
        for (i=0; i<3; i++) {
          for (j=6; j<9; j++) {
            if (matrix[i][j] != 0) {
              value = matrix[i][j];
              p.push(value);
            };
          };
        };
      };
      if (y==3 || y==4 || y==5) {
        for (i=3; i<6; i++) {
          for (j=6; j<9; j++) {
            if (matrix[i][j] != 0) {
              value = matrix[i][j];
              p.push(value);
            };
          };
        };
      };
      if (y==6 || y==7 || y==8) {
        for (i=6; i<9; i++) {
          for (j=6; j<9; j++) {
            if (matrix[i][j] != 0) {
              value = matrix[i][j];
              p.push(value);
            };
          };
        };
      };
    };
    p.sort();
    let np = [];
    for (i=0; i<p.length; i++) {
      if (p[i] != np[np.length-1]) {
        np.push(p[i]);
      };
    };
    sud[y][x] = np; 
  };
// Поиск ячеек с 8 элементами массива и запись девятого(недостающего числа туда) 
  for (i=0; i<9; i++) {
    for (j=0; j<9; j++) {
      p = sud[i][j];
      if (p.length==8) {
        let composition = 9*8*7*6*5*4*3*2*1;
        for (k=0; k<8; k++) {
          composition = composition/(p[k]);
        };
        matrix[i][j] = composition;
      };
    };
  };
  // console.log(unknownX, unknownY, sud, matrix);
  return matrix;
}
