function findLargeNumber(array) {
  let numArray =  [], 
  for (var i = 0; i < array.length; i++) {
    let element = array[i];
    numArray.push(element);
  }
  let numArray2 = Math.min(numArray)
  return numArray2;
}

const numbars =[64, 54, 59, 16]
const findLargeNumber = findLargeNumber(numbars);
console.log(findLargeNumber);