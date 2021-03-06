// CODEWARS 8KYU - CHECK THE EXAM
// INSTRUCTIONS:
// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", ", "c"]) → 0

// SOLUTION
function checkExam(array1, array2) {
    let score = 0
    for (let i=0; i<array1.length;i++){
           if(array1[i]===array2[i]){
          score+=4
        }else if(array2[i]=== ""){
          score+=0
        }else{
          score-=1
        }  
    }
     return score < 0 ? 0: score;
   }

//    CLEVER SOLUTIONS BY OTHERS:
//With reduce() method
checkExam = (array1, array2) => (array1 = array2.reduce((acc, curr, i) => acc + (curr === array1[i] ? 4 : curr === '' ? 0 : -1), 0)) > 0 ? array1 : 0;

const checkExam = (array1, array2) =>
  Math.max(array2.reduce((pre, val, idx) => val ? val === array1[idx] ? pre + 4 : --pre : pre, 0), 0);