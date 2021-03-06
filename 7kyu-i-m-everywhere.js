// CODEWARS 7KYU - I'M EVERYWHERE 
// INSTRUCTIONS
// Overview
// Many people know that Apple uses the letter "i" in almost all of its devices to emphasize its personality.

// And so John, a programmer at Apple, was given the task of making a program that would add that letter to every word. Let's help him do it, too.

// Task:
// Your task is to make a function that takes the value of word and returns it with an "i" at the beginning of the word. For example we get the word "Phone", so we must return "iPhone". But we have a few rules:

// The word should not begin with the letter "I", for example Inspire.
// The number of vowels should not be greater than or equal to the number of consonants, for example East or Peace. ("y" is considered a consonant)
// The first letter should not be lowercase, for example road.
// If the word does not meet the rules, we return "Invalid word".

// FUNDAMENTALS

// SOLUTIONS:
function i(word) {
    //^[a-zI]: ^ matches beginning of the word
    // [a-zI]: matches any lowercase letter at the beginning of the word and also capital I at the beginning of the word
    if (/^[a-zI]/.test(word) || word.replace(/[^aeiou]/ig,'').length * 2>=word.length) return 'Invalid word';
    return 'i'+word;
  }

  function i(word) {
    let vowels = Array.from(word.toLowerCase())
        .filter(letter => 'aeiou'.includes(letter)).length
    let consonants = Array.from(word.toLowerCase())
        .filter(letter => 'bcdfghjklmnpqrstvwxyz'.includes(letter)).length

    if (word.slice(0,1).toLowerCase() === 'i' ||
        word.slice(0,1).toLowerCase() === word.slice(0,1) ||
        vowels >= consonants) {
        return("Invalid word")
    }
    else {return('i'+word)}
}
