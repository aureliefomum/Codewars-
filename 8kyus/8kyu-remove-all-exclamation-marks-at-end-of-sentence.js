// 8KYU CODEWARS -Exclamation marks series #2: Remove all exclamation marks from the end of sentence
// INSTRUCTIONS
// Description:
// Remove all exclamation marks from the end of sentence.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"
// FUNDAMENTALS

// SOLUTIONS:
//1)
function remove(s){
    let newStr = s;
    
    while (newStr[newStr.length-1] === "!"){
      
      newStr = newStr.slice(0, -1);
      
    }  
    return newStr
  }