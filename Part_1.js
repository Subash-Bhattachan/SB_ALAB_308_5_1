// function returning the sum
////////////////////////////////////////////
const array = [1, 2, 3];

function getSum(array) {
  let sumOfNums = 0;
  for (let i = 0; i < array.length; i++) {
    sumOfNums += array[i]; 
}
return sumOfNums;
}

console.log(getSum(array));



// Function calculating the average of numbers
//////////////////////////////////////////////
function calAve(array) { 
  let sum = 0; 
  let average = 0;
   
  for (let i = 0; i < array.length; i++) {
  sum += array[i]; 
   
  average = sum / array.length; 
  }
   
  //console.log(average); 
   
  return average; 
  }; 
  console.log(calAve(array))




// function calculating the longest string from the array of strings
/////////////////////////////////////////////////////////////
arrOfstr = ['say', 'hello', 'in', 'the', 'morning']

function findLongestString(arrOfstr) {
  let longest = "";
  
  for (let str of arrOfstr) {
    if (str.length > longest.length) {
      longest = str;
    }
  }

  return longest;
}

console.log(findLongestString(arrOfstr))





//function calculating the array of strings that are longer than the given number 
////////////////////////////////////////////////////////////
function findLongerThan(arr, num1) {
   let output = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > num1){
      output.push(arr[i]);
  }
  }
  return output
  }
  console.log(findLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3))



// Printing every number between 1 and n without using loops but using Recursion
////////////////////////////////////////////////////////
let number;
let givenValue;
function printNumberRecursive(number, givenValue) {
  if (givenValue > number) {
    return;
  }
  console.log(givenValue);
  printNumberRecursive(number, givenValue + 1);
}

printNumberRecursive(15,1);









