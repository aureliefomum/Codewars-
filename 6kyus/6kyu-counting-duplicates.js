// 6KYU CODEWARS - COUNTING DUPLICATES
// INSTRUCTIONS 
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// FUNDAMENTALS STRINGS
//SOLUTION:
//1)
function duplicateCount(text){
    let count = {}
    
    for(let letter of text.toLowerCase()){
      if(count[letter]){
        count[letter]++
      }else{
        count[letter]=1
      }
    }  
  
    return Object.values(count).filter(x=>x>1).length
  }
  
  //2)
  function duplicateCount(text){
    let count = {}
    
    for(let letter of text.toLowerCase()){
      if(count[letter]){
        count[letter]++
      }else{
        count[letter]=1
      }
    }  
      
    let finalCount =0
    for (let letter in count)
      if(count[letter] > 1){
        finalCount++
      }
    return finalCount
  }