//8KYU CODEWARS - ASCII TOTAL

// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

// examples:

// uniTotal("a") == 97 uniTotal("aaa") == 291

// FUNDAMENTALS
// SOLUTION:
//1)
function uniTotal(str)
{
  
  return str.split('').reduce((acc,curr) => acc+curr.charCodeAt(0),0)
  

}

//2)
function uniTotal(str) {
    let total = 0;
    for (var i = 0; i < str.length; i++) {
      total += str.charCodeAt(i);
    }
    return total;
  }

