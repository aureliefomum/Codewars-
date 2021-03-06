//6KYU CODEWARS  - STRING ARRAY DUPLICATES
// INSTRUCTIONS 
// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].
// Strings will be lowercase only, no spaces. See test cases for more examples.

// Good luck!

// If you like this Kata, please try:

// Alternate capitalization

// Vowel consonant lexicon

//SOLUTIONS 

//1)
function dup(s) {
    return s.map(x => x.split('').filter((el,i,arr)=> el !== arr[i+1]).join(''))          
               
  };
//   2)

const dup = s =>
  s.map(val => val.replace(/(.)\1+/g, `$1`));