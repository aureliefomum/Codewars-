// CODEWARS 7KYU - HIGHEST AND LOWEST
// INSTRUCTIONS
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.
// FUNDAMENTALS STRINGS

//SOLUTIONS:
  
function highAndLow(numbers){
  
    let arrNums =numbers.split(' ').map(x => parseInt(x))
    
    return arrNums = `${[Math.max(...arrNums)]} ${[Math.min(...arrNums)]}`
  }