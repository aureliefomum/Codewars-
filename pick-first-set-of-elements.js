// CODEWARS 8KYU: PICK A SET OF FIRST ELEMENTS
// INSTRUCTIONS:
// Write a function to get the first elements of asequence. Passing a parameter n (default=1) will return the first n elements of the sequence.

// If n == 0 return an empty sequence []

// Examples
// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];

// SOLUTION: 

function first(arr, n) {
    return n===0 ? [] : n > 1 ? arr.slice(0, n) : [arr[0]];
  }

  //SOLUTION 2 :
  function first(arr, n=1) {
    return arr.slice(0,n);
 }