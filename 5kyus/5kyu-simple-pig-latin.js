// 5KYU CODEWARS - SIMPLE PIG LATIN 
// INSTRUCTIONS 
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// SOLUTIONS:
//1)
function pigIt(str){
  return str.split(' ').map(word =>  word.match(/[.,:!?]/)? word : word.slice(1) + word.slice(0,1) + 'ay').join(' ')
}

//2)
function pigIt(str) {
  return str.replace(/\w+/g, (w) => {
    return w.slice(1) + w[0] + 'ay';
  });
}


