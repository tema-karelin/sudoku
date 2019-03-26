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
  // Создание клона исходной матрицы
  // Создание клона исходной матрицы
  let m1 =[]; // Клон, который останется неизменным
  let sud = []; // Создание соразмерного массива для решения
  let unsud = [];
  m1.length = 9;
  let unknown = []; // Массив с координатами пустых ячеек
  sud.length = 9;
  unsud.length = 9;
  for (let c=0; c<9; c++) {
    m1[c] = [];
    m1[c].length = 9;
    sud[c] = [];
    sud[c].length = 9;
    unsud[c] = [];
    unsud[c].length = 9;
  };
  for (let i=0; i<9; i++){  
    for (let j=0; j<9; j++){
      m1[i][j] = matrix[i][j];
    };
  };

  function zeroArray(matrix) {
    for (let i=0; i<9; i++){  
      for (let j=0; j<9; j++){
          if (matrix[i][j] == 0) {
              sud[i][j] = [];   // Создание пустого массива в пустом элементе
              unsud[i][j] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            } else {sud[i][j] = matrix[i][j]; unsud[i][j] = matrix[i][j];};
      };
    };
    return sud;
  };

  function emptyList(matrix) {
    let unknownX = [];
    let unknownY = [];
    // Поиск пустых элементов судоку
    for (let i=0; i<9; i++){  
      for (let j=0; j<9; j++){
        if (matrix[i][j] == 0) {
          unknownX.push(j); // Запись координаты X
          unknownY.push(i); // Запись координаты Y
          
        };
      };
    };
    unknown = [unknownX, unknownY];
    return unknown;  // На выходе 1 массив с двумя элементами, тоже массивы. В первом координаты X пустых ячеек, во втором - Y 
  };

  
  
// Добавление элементов массива в ячейку с пустым массивом. Массив содержит числа, которые не могут быть в этой ячейке.
function exceptionRecord(unknown, matrix) {
  for (let k=0; k<unknown[0].length; k++) {  
    let x = unknown[0][k];
    let y = unknown[1][k];
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
  return sud;
};

function unExceptionRecord(sud) {
    for (i=0; i<9; i++) {
        for (j=0; j<9; j++) {
            for (c=0; c<sud[i][j].length; c++) {
                for (k=0; k<9; k++) {
                    if (sud[i][j][c] == unsud[i][j][k]) {
                        unsud[i][j].splice(k, 1);
                    };
                };
            };
        };
    };
    return unsud;
};

function F_loner(matrix) {
  zeroArray(matrix);
  emptyList(matrix);
  exceptionRecord(unknown, matrix);
  unExceptionRecord(sud);
// Поиск ячеек с 8 элементами массива и запись девятого(недостающего числа) вместо этого массива 
  for (i=0; i<9; i++) {
    for (j=0; j<9; j++) {
      p = sud[i][j];
      if (p.length==8) {
        let composition = 9*8*7*6*5*4*3*2*1;
        for (k=0; k<8; k++) {
          composition = composition/(p[k]);
        };
        matrix[i][j] = composition;
        F_loner(matrix);
      };
    };
  };
  return matrix;
};
function onlyVariantInRow(unsud) {
    let rows = [];
    let nrows = [];
    let columns = [];
    let ncolumns = [];
    rows.length = 9;
    nrows.length = 9;
    columns.length = 9;
    ncolumns.length = 9;
    for (i=0; i<9; i++) {
        rows[i] = [];
        columns[i] = [];
        nrows[i] = [];
        ncolumns[i] = [];
    };
    // для строк (rows)
    for (i=0; i<9; i++) {
        for (j=0; j<9; j++) {
            if (Array.isArray(unsud[i][j])) {
                for (c=0; c<unsud[i][j].length; c++) {
                    rows[i].push(unsud[i][j][c]);
                    // columns[j].push(sud[i][j][c]);
                };
            };
        };
    };
    for (i=0; i<9; i++) {
        rows[i].sort();
        // columns[i].sort();
    };
    for (i=0; i<9; i++) {
        for (j=0; j<rows[i].length; j++) {
            if (j == 0) {
                if (rows[i][j] != rows[i][j+1]) {nrows[i].push(rows[i][j]);};
            } else {
                   if (j == rows[i].length - 1) {
                       if (rows[i][j] != rows[i][j-1]) {nrows[i].push(rows[i][j]);};
                   } else {
                       if (rows[i][j] != rows[i][j-1] && rows[i][j] != rows[i][j+1]) {nrows[i].push(rows[i][j]);};
                   };
            };
            
        };
    };
    for (i=0; i<9; i++) {
        if (nrows[i].length != 0) {
            for (j=0; j<nrows[i].length; j++) {
                for (c=0; c<9; c++) {
                    if (Array.isArray(unsud[i][c])) {
                        for (k=0; k<unsud[i][c].length; k++) {
                            if (nrows[i][j] == unsud[i][c][k]) {
                                matrix[i][c] = nrows[i][j];
                            };
                        };
                    };
                };
            };
        };
    };
    zeroArray(matrix);
    emptyList(matrix);
    exceptionRecord(unknown, matrix);
    unExceptionRecord(sud);
    //    для колонок (columns)
    for (i=0; i<9; i++) {
    for (j=0; j<9; j++) {
        if (Array.isArray(unsud[i][j])) {
            for (c=0; c<unsud[i][j].length; c++) {
                // rows[i].push(sud[i][j][c]);
                columns[j].push(unsud[i][j][c]);
            };
        };
    };
    };
    for (i=0; i<9; i++) {
    // rows[i].sort();
    columns[i].sort();
    };
    for (i=0; i<9; i++) {
    for (j=0; j<columns[i].length; j++) {
        if (j == 0) {
            if (columns[i][j] != columns[i][j+1]) {ncolumns[i].push(columns[i][j]);};
        } else {
               if (j == columns[i].length - 1) {
                   if (columns[i][j] != columns[i][j-1]) {ncolumns[i].push(columns[i][j]);};
               } else {
                   if (columns[i][j] != columns[i][j-1] && columns[i][j] != columns[i][j+1]) {ncolumns[i].push(columns[i][j]);};
               };
        };
        
    };
    };
    for (i=0; i<9; i++) {
    if (ncolumns[i].length != 0) {
        for (j=0; j<ncolumns[i].length; j++) {
            for (c=0; c<9; c++) {
                if (Array.isArray(unsud[c][i])) {
                    for (k=0; k<unsud[c][i].length; k++) {
                        if (ncolumns[i][j] == unsud[c][i][k]) {
                            matrix[c][i] = ncolumns[i][j];
                            
                        };
                    };
                };
            };
        };
    };
    };
    F_loner(matrix);
    return matrix;
};

  F_loner(matrix);
  unExceptionRecord(sud);
  onlyVariantInRow(unsud);
  
//   console.log(m1);
//   console.log(matrix);
//   console.log(sud);
//   console.log(unknown);
//   console.log(unsud);
  return matrix;
}
