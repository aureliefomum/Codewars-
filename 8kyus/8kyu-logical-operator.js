// 8KYU CODEWARS - LOGICAL OPERATOR 
// INSTRUCTIONS 
// Your Task
// Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

// Examples
// booleans = [True, True, False], operator = "AND"
// True AND True -> True
// True AND False -> False
// return False
// booleans = [True, True, False], operator = "OR"
// True OR True -> True
// True OR False -> True
// return True
// booleans = [True, True, False], operator = "XOR"
// True XOR True -> False
// False XOR False -> False
// return False
// Input
// an array of Boolean values (1 <= array_length <= 50)
// a string specifying a logical operator: "AND", "OR", "XOR"
// Output
// A Boolean value (True or False).

// SOLUTION:
//1)
function logicalCalc(array, op){
  
  if (op==="AND"){
    return array.reduce((a,b) => a && b)
  } else if(op === "OR"){
     return array.reduce((a,b) => a || b)
  }else{
    return  array.reduce((a,b) => a !== b)
  }
  }

//2)
function logicalCalc(array, op){
  switch(op){
  case 'AND':return array.every(Boolean);
  case 'OR':return array.some(Boolean);
  case 'XOR':return Boolean(array.filter(Boolean).length&1);
  }
} 

    
