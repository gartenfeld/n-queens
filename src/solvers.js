/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead 
// search space) take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, 
// with n rooks placed such that none of them can attack each other

var solutions = [];

var generatePerm = function(columnOptions, givenPath){
  var current;
  var newPath;
  var givenPath = givenPath || [];

  for(var i = 0; i < columnOptions.length; i++){
    // removing ith column from columnOptions, and mutates columnOptions
    current = columnOptions.splice(i, 1)[0];
    newPath = givenPath.concat(current);

    // checks if columnOptions array is empty
    if(columnOptions.length === 0){
      solutions.push(newPath);
    }

    // recurse with a COPY of the columnOptions and the newPath as the givenPath
    generatePerm(columnOptions.slice(), newPath);
    // reinsert into the columnOptions array
    columnOptions.splice(i, 0, current);
  }
};

var numToBinaryMatrix = function(array, n){
  return _(array).map(function(item){
    var lineArr = []
    for (var i = 0; i < n; i++) {
      if (i === item) {
        lineArr.push(1);
      } else {
        lineArr.push(0);
      };      
    }
    return lineArr;
  });
};

window.findNRooksSolution = function(n) {
  solutions = [];
  generatePerm(_.range(n));

  var result = numToBinaryMatrix(solutions[0], n);

  //solution = placeRook(matrix);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(result));
  return result;
};



// return the number of nxn chessboards that exist, with n rooks placed 
// such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  solutions = [];
  generatePerm(_.range(n));
  var solutionCount = solutions.length;

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

var queensHelper = function(){

  var queenSolutions = [];
  var candidate;
  var column; 
  var majorConflict = false,
      minorConflict = false;

  for(var i = 0; i < solutions.length; i++){
    candidate = solutions[i];
    minorConflict = false;
    majorConflict = false;

    for(var j = 0; j < candidate.length; j++){
      column = candidate[j];
      // console.log(column);

      // check minor
      for (var minor = 0; minor < candidate.length; minor++) {
        if ((j !== minor) && (column + j === candidate[minor] + minor)) {
          minorConflict = true;
          // console.log('checking ' + j + ', ' + column + ' against ' + minor + ', ' + candidate[minor] + ' => conflict');

        }
      };
      // checking major
      for (var major = 0; major < candidate.length; major++) {
        if ((j !== major) && (column - j === candidate[major] - major)) {
          majorConflict = true;
        }
      };
    }

    if (!minorConflict && !majorConflict) {
        queenSolutions.push(candidate);
    };

  }

  return queenSolutions;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, 
// with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  if (n === 2) {
    return [[0, 0],[0, 0]];
  };
  if (n === 3) {
    return [[0,0,0],[0,0,0],[0,0,0]];
  }
  solutions = [];
  generatePerm(_.range(n));
  var queenSolutions = queensHelper();

  var result = numToBinaryMatrix(queenSolutions[0], n);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(result));
  return result;
};


// return the number of nxn chessboards that exist, with n queens placed 
// such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; 
  if (n === 0 || n === 1) {
    solutionCount = 1;
  } else if(n === 2 || n === 3){
    solutionCount = 0;
  } else {
    solutions = [];
    generatePerm(_.range(n));
    solutionCount = queensHelper().length;
  }

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
