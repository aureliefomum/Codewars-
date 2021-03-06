// CODEWARS 8KYU - HELLO NAME OR WORLD
// INSTRUCTIONS: 
// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// hello "john"   => "Hello, John!"
// hello "aliCE"  => "Hello, Alice!"
// hello          => "Hello, World!" # name not given
// hello ""       => "Hello, World!" # name is an empty String
// FUNDAMENTALS

// SOLUTION :
function hello(name) {
    return `Hello, ${name ? name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() : "World"}!`
  }

 // OTHER SOLUTIONS:
 function hello(name) {
  if (name) {
  return 'Hello, ' + name[0].toUpperCase() + name.substring(1,name.length).toLowerCase() + '!';
  } else {
  return 'Hello, World!'
  }
}


function hello(name) {
  return name ? 'Hello, ' + name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase() + '!' : 'Hello, World!';
}

