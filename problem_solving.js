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