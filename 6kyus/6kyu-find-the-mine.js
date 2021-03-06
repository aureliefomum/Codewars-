// 6KYU CODEWARS - FIND THE MINE!
// INSTRUCTIONS:
// You've just discovered a square (NxN) field and you notice a warning sign. The sign states that there's a single bomb in the 2D grid-like field in front of you.

// Write a function mineLocation/MineLocation that accepts a 2D array, and returns the location of the mine. The mine is represented as the integer 1 in the 2D array. Areas in the 2D array that are not the mine will be represented as 0s.

// The location returned should be an array (Tuple<int, int> in C#) where the first element is the row index, and the second element is the column index of the bomb location (both should be 0 based). All 2D arrays passed into your function will be square (NxN), and there will only be one mine in the array.

// Examples:
// mineLocation( [ [1, 0, 0], [0, 0, 0], [0, 0, 0] ] ) => returns [0, 0]
// mineLocation( [ [0, 0, 0], [0, 1, 0], [0, 0, 0] ] ) => returns [1, 1]
// mineLocation( [ [0, 0, 0], [0, 0, 0], [0, 1, 0] ] ) => returns [2, 1]

// SOLUTIONS:

function mineLocation(field){
  let mineArray = field.filter((x,i)=> x.includes(1))  
  let mineIndex = field.map(el=> el.indexOf(1)).filter(el=>el!== -1)
  
  return [field.indexOf(...mineArray), ...mineIndex]
}

//2)
function mineLocation(field){
  for (var i = 0; i < field.length; i++) {
    for (var j = 0; j < field[i].length; j++) {
      if (field[i][j] === 1) {
        return [i, j] 
      }
    }
  }
}

//3)
const mineLocation=(field,tmp)=>field.map((x,i)=>[i,x.findIndex(x=>x==1)]).filter(x=>x[1]!=-1)[0];