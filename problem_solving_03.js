// 1st problem

// function celToFahren(celsius) {
// 	let fahrenhiet = (celsius * (9/5)) + 32;
// 	return fahrenhiet;
// }

// const celsicus = 32;

// const fahrenhiet = celToFahren(celsicus);

// console.log(fahrenhiet)

// 2nd problem 
/* 
function fahrenToCel(fahrenhiet){
    const celsicus = (fahrenhiet - 32) * (5/9);
    return celsicus;
}

const fahrenhiet = 90;

const celsicus = fahrenToCel(fahrenhiet);

console.log(celsicus) */

// 3rd problem
/* 
function findGrade(score) {
  if(score >= 80){
    const grade = 'A+';
    return grade;
  }
  else if (score >= 70){
    const grade = 'A';
    return grade;
  }
  else if (score >= 60){
    const grade = 'B';
    return grade;
  }
  else if (score >= 50){
    const grade = 'C';
    return grade;
  }
  else{
    const grade = 'Fail'
    return grade;
  }
}

const score = 40;
const grade = findGrade(score);
console.log('You got ', grade);
*/

// 4th problem

// formula = 'A = p(1 + rt)'
/* 
function interestWithMain(money, rate, time){
  const rateOfInterest = rate/100;
  const finalAmount = money*(1 + (rateOfInterest * time));
  return finalAmount;
}

console.log(interestWithMain(75000, 10, 5))
*/