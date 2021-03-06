// CODEWARS 6KYU - CREATE PHONE NUMBER 
// INSTRUCTIONS 
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns

// SOLUTION:
function createPhoneNumber(numbers){
    let firstSet = numbers.slice(0,3).join('')
     let secondSet = numbers.slice(3,6).join('')
    let thirdSet = numbers.slice(6,10).join('')
    return `(${firstSet}) ${secondSet}-${thirdSet}`
  }

  //OTHERS' SOLUTIONS:
  //1)
  function createPhoneNumber(numbers){
    return '(' + numbers.slice(0,3).join('') + ') ' + numbers.slice(3,6).join('') + '-' + numbers.slice(6).join('');
  }

  //2)
  function createPhoneNumber(numbers){
    let phoneNum = "(xxx) xxx-xxxx";
    
    for(let i = 0; i < numbers.length; i++)
    {
      phoneNum = phoneNum.replace('x', numbers[i]);
    }
    
    return phoneNum;
  }
