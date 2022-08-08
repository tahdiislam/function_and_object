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