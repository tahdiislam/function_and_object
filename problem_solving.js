//1st problem 
/* 
function bar(){
  console.log('bar')
}
function foo(){
  // console.log('foo');
  bar();
};


foo()
*/
// 2nd problem
/* 
function make_avg(number1, number2, number3){
   let sum = number1 + number2 + number3;
   let avg = sum / 3;
   return avg;
}

let number1 = 76;
let number2 = 26;
let number3 = 20;

let average = make_avg(number1, number2, number3);
let average2 = average.toFixed(2);
let average3 = parseFloat(average2)
console.log(typeof average3)
*/

// 3rd problem
/* 
function make_avg(array, arrayLength){
  let arrayLength2 = arrayLength
  var sum = 0;
  for (let i = 0; i < arrayLength; i++){
    sum += array[i];
  }
  let average = sum / arrayLength2;
  let average2 = average.toFixed(2);
  let average3 = parseFloat(average2)
  return average3;
}


let array3 = [45, 64, 34, 64, 64, 22, 64, 67, 64, 35, 62];
let arrayLength3 = array3.length;
let make_averege = make_avg(array3, arrayLength3);
console.log(make_averege)
 */

// 4th problem

/* function odd_even(number){
  if (number % 2 === 0){
    let numberCheck = "This is a even number";
    return numberCheck;
  } else if (number % 2 !== 0){
    let numberCheck = "This is a odd number";
    return numberCheck;
  }
}

let checkNumber = odd_even(45);
console.log(checkNumber);
 */
/* 
function odd_even(number){
  if (number % 2 === 0){
    let numberCheck = "This is a even number";
    console.log(numberCheck);
  } else if (number % 2 !== 0){
    let numberCheck = "This is a odd number";
    console.log(numberCheck);
  }
}

odd_even(66) 
*/

// 5th problem
/*
let signal = "yellow"

switch (signal) {
  case 'green':
    const messege1 = "You Should Cross The Road";
    console.log(messege1);
    break;
  case "red" :
    const messege2 = "You Should Wait until the Signal is Green";
    console.log(messege2);
    break;
  case "yellow":
    const messege3 = "Wait a Moment";
    console.log(messege3);
    break;
} */
/* 
// get odd number sum

function getOddNumber(number){
  let oddElements = [];
  for(let i = 0; i < number.length; i++){
    const index = i;
    const element = number[index];
    if(element % 2 !== 0){
      const oddElement = element;
      oddElements.push(oddElement);
    }
  }
  return oddElements;
}

// let numberArray = [34, 55, 34, 45, 67, 23, 63];

// let OddNumber = getOddNumber(numberArray)

// console.log(OddNumber);

function getOddNumberAverege(numbers){
  let sum = 0;
  for(let i = 0; i < numbers.length; i++){
    const index = i;
    const element = numbers[index];
    sum += element;
  }
  const oddNumberAverege = sum / numbers.length;
  return oddNumberAverege;
}

const numbers = [45, 64, 63, 66, 643, 345, 653, 32, 64, 64, 64, 423];

const OddNumbers = getOddNumber(numbers);

const getOddNumbersAverege = getOddNumberAverege(OddNumbers)

console.log(getOddNumbersAverege);
 */
