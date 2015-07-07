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
  var solution, newMatrix;
  var rookCounter = 0;


  var matrix = new Board({n:n});


  var placeRook = function(matrix) {
    var row;
    // place at next available spot
    for(var i = 0; i < n; i++){
      for(var j = 0; j < n; j++){
        // if all allotted rooks have been placed
        
        // if the cell is empty
        if(matrix.get(i)[j] === 0){
          
          
          // newMatrix = new Board(matrix.rows()); // copy the matrix
          // row = newMatrix.get(i); 
          // row[j] = 1;
          // newMatrix.set(i, row); // place a rook there
          // if the newly placed rook does not have conflicts'

          console.log(newMatrix);

          if(!newMatrix.hasAnyRooksConflicts()){
            // add another possible rook to the board
            rookCounter++;
            if(rookCounter === n){
              return newMatrix;
            } else {

              // console.log(JSON.stringify(newMatrix.rows()));
              return placeRook(newMatrix);
            }
            
            
          }
        }
      }
    }

  };

  solution = placeRook(matrix);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
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
