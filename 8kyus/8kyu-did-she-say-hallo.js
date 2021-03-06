// 8KYU CODEWARS - DID SHE SAY HALLO?
// INSTRUCTIONS:
// These are the languages of the possible people you met the night before:

// hello - english
// ciao - italian
// salut - french
// hallo - german
// hola - spanish
// ahoj - czech republic
// czesc - polish
// Notes

// you can assume the input is a string.
// to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
// function should be case insensitive to pass the tests

// SOLUTION
//1)
function validateHello(greetings) {  
    return /(hello|ciao|salut|hallo|hola|ahoj|czesc)/i.test(greetings)
 }

 //2)
 const hellos = {
  hello: 'english',
  ciao: 'italian',
  salut: 'french',
  hallo: 'german',
  hola: 'spanish',
  ahoj: 'czech republic',
  czesc: 'polish',
  }
  
  const validateHello = greetings => {
    for (key in hellos) {
     if (greetings.toLowerCase().includes(key)) {
       return true
     }
    }
    return false
  }