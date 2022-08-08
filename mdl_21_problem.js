// 1st problem
/* function findWhoIsTheTollest(numbers){
  let largest = numbers[0];
  for (let i = 0; i < numbers.length; i++){
    const index = i;
    const element = numbers[index];
    if(element > largest){
      largest = element;
    }
  } return largest;
}
const height = [342, 433, 512, 321];

// findWhoIsTheTollest(height)
const tallest = findWhoIsTheTollest(height);

console.log(tallest); */

// find Large number with Math.max()
/* 
const numbers = [343, 340, 654, 4, 2323, 34, 343];

const number = Math.max(...numbers)

console.log(number) */

// find the lowest number with Math.min()
/* 
const numbers = [343, 340, 654, 40000, 2323, 34, 343];

const number = Math.min(...numbers);

console.log(number)
 */
// 2nd problem
/* 
const num1 = 3434;
const num2 = 33;
const num3 = 33;

console.log(Math.min(num1, num2, num3)) */

// 3rd problem
/* 
function average(numbers){
  let sum = 0; 
  for(let i =0; i < numbers.length; i ++){
    sum += numbers[i];
  }
  let aver = sum / numbers.length;
  return aver;
}

const numbersArray = [73,82,81,53]
let findAver = average(numbersArray);
console.log(findAver);
*/
/* 
function volumeOfRectangle(length, width, height){
  const volume = length * width * height;
  return volume;
}
const length2 = 5;
const width2 = 6;
const height2 = 8;
const volume = volumeOfRectangle(length2, width2, height2);
console.log(volume);
*/
/* 
// swap a variable
    // with tempo
let a = 99;
let b = 567;
// let temp;
// temp = a;
// a = b;
// b = temp;
// console.log(a, b)
    // with destructing
[a, b] = [b, a];
console.log(a, b)
*/

// who will get the cake
/* 
function getCake(num1, num2, num3){
  if(num1 > num2 && num1 > num3){
    const result = "bela will get the cake"
    return result;
  } else if (num2 > num1 && num2 > num3){
    const result = "chinku whill get the cake";
    return result;
  } else {
    const result = "dela will get the cake"
    return result;
  }
}

let bela, chinku, dela;
bela = 66;
chinku = 89;
dela = 50;
const whoGetTheCake = getCake(bela, chinku, dela)
console.log(whoGetTheCake)
 */
  // 2nd 
/* 
function getCake(num1, num2, num3){
  if (num1 < num2 && num1 < num3){
    return "bela will get the cake"
  } else if (num2 < num1 && num2 < num3){
    return "chinku will get the cake"
  } else {
    return "dela will get the cake"
  }
}

let bela, chinku, dela;
bela = 66;
chinku = 89;
dela = 50;
const whoGetTheCake = getCake(bela, chinku, dela)
// console.log(whoGetTheCake)
 */
/* 
let bela, chinku, dela;
bela = 76;
chinku = 78;
dela = 89;

// const getTheCake = Math.max(bela, chinku, dela);

// console.log(getTheCake)

const getTheCake2 = Math.min(bela, chinku, dela);

console.log(getTheCake2) */