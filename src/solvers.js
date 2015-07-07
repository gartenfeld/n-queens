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

window.findNRooksSolution = function(n) {
  var solutions = [];
  var input = _.range(n);

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

  generatePerm(input);

  var result = _(solutions[0]).map(function(item){
    var outArr = [];
    for (var i = 0; i < n; i++) {
      if (i === item) {
        outArr.push(1);
      } else {
        outArr.push(0);
      };      
    }
    return outArr;
  });

  //solution = placeRook(matrix);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(result));
  return result;
};



// return the number of nxn chessboards that exist, with n rooks placed 
// such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, 
// with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed 
// such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
