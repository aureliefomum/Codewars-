// CODEWARS 7KYU - STRING MATCHUP 
// INSTRUCTIONS 
// Given two arrays of strings, return the number of times each string of the second array appears in the first array.

// Example
// array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
// array2 = ['abc', 'cde', 'uap']
// How many times do the elements in array2 appear in array1?

// 'abc' appears twice in the first array (2)
// 'cde' appears only once (1)
// 'uap' does not appear in the first array (0)
// Therefore, solve(array1, array2) = [2, 1, 0]

// Good luck!

// If you like this Kata, please try:

// Word values

// Non-even substrings

// ALGORITHMS


// SOLUTION:

const solve =(arr1,arr2) => arr2.map(a=> arr1.filter(e=> e===a).length)

//OTHER SOLUTIONS:
function solve(a, b) {
    return b.map(x => a.reduce((n, y) => x === y ? n + 1 : n, 0))
  }
  function solve(a,b){
    let arrResult = [];
    let cont = 0;
    for (let i = 0; i < b.length; i++){
      for (let j = 0; j < a.length; j++){
        if (b[i] === a [j]){
          cont++;
        }
      }
      arrResult.push(cont);
      cont = 0;
    }
    
    return arrResult;
  }
  

