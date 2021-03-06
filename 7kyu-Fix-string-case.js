
// CODEWARS 7KYU - FIX STRING CASE 

// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
// More examples in test cases. Good luck!

// Please also try:

// Simple time difference

// Simple remove duplicates
//SOLUTIONS
//1)

function solve(s){
  let upperArr = [...s].filter(el=> el === el.toUpperCase())
 
 return s.length === upperArr.length*2 || s.length - upperArr.length > upperArr.length? s.toLowerCase(): s.toUpperCase(); 
}
// 2)

function solve(s){
  let upper = s.split('').filter(x => x === x.toUpperCase()).length
  let lower = s.length - upper
  return (upper > lower) ? s.toUpperCase() : s.toLowerCase() 
}

// 3)

function solve(s){
  return s.replace(/[a-z]/g,'').length>s.length/2 ? s.toUpperCase() : s.toLowerCase()
}




