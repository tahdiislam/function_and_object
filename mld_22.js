// Array.slice() & Array.splice()

/* const numbers = [343, 345, 563, 324, 232];

// const numberSlice = numbers.slice(1, 4);
// console.log(numberSlice);

const numberSplice = numbers.splice(0, 2, 2, 533, 34, 343, 534, 642, 342, 53432);

console.log(numberSplice)
console.log(numbers) */

// remove the duplicates
/* 
const names = ['abul', 'babul', 'cabul', 'kabul', 'babul', 'cabul', 'kabul', 'bulbul', 'culbul', 'bulbul']
function rmDublicates(){
  const unique = [];
  for (let i = 0; i < names.length; i++){
    const name = names[i];
    if(unique.includes(name) === false){
      unique.push(name);
    }
  }
  return unique;
}

const uniqueName = rmDublicates(names);
console.log(uniqueName)
 */

// fizz buzz
/* 
for (let i = 0; i <= 50; i++){
  if(i % 15 === 0){
    console.log('foobar')
  }
  else if (i % 3 === 0){
    console.log("foo")
  }
   else if (i % 5 === 0){
    console.log('bar')
  } 
   else{
    console.log(i)
  }
} 
*/

// problem wood Calculator 
/* 
function woodCalculator(chairQuantity, tablequantity, bedQuantity){
// constant value for table, chair, and bed wood needed
  const perChairWood = 4;
  const perTableWood = 15;
  const perBedWood = 40;
// main calculation
  const chairWood = perChairWood * chairQuantity;
  const tableWood = perTableWood * tablequantity;
  const bedWood = perBedWood * bedQuantity;
// total wood needed
  const totalWood = chairWood + tableWood + bedWood;
// return value
  return totalWood;
}

const totalWood = woodCalculator(10, 2, 2)

console.log(totalWood); 
*/

// find the chepest phene
/* 
const phones = [
  {name: "Samnung", camera: 16, storage: "64gb", price: 32000, color: "black"},
  {name: "Walton", camera: 16, storage: "64gb", price: 25000, color: "black"},
  {name: "Huawei", camera: 16, storage: "64gb", price: 80000, color: "black"},
  {name: "OnePlus", camera: 16, storage: "64gb", price: 70000, color: "black"},
  {name: "IPhone", camera: 16, storage: "64gb", price: 90000, color: "black"},
  {name: "Xaomi", camera: 16, storage: "64gb", price: 30000, color: "black"},
  {name: "RealMe", camera: 16, storage: "64gb", price: 24000, color: "black"},
]

function cheapestPhone(phones2){
  let cheapPrice = phones2[0];
  for(i = 0; i < phones2.length; i++){
    const phone = phones2[i];
    if(phone.price < cheapPrice.price){
      cheapPrice = phone;
    }
  }
  return cheapPrice;
}

const cheapestPhone2 = cheapestPhone(phones);

console.log(cheapestPhone2)

// find the expensive phone

function mostExpensivePhone(phone2){
  let expensivePhone = phone2[0];
  for (i = 0; i < phone2.length; i++){
    const phone = phone2[i];
    if(phone.price > expensivePhone.price){
      expensivePhone = phone;
    }
  }
  return expensivePhone;
}

const theMostExpensivePhone = mostExpensivePhone(phones);

console.log(theMostExpensivePhone)
 */