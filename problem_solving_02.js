// 1st problem
/* 
function convertHourToMinutes(hour){
	const minutes = hour * 60;
	return minutes;
}

const hour = 4;

const minutes = convertHourToMinutes(hour);

console.log(hour, ' Hour = ', minutes, 'minutes')

 */

// 2nd problem (find leap year)

/* 
function findLeapYear(year) {
	let leapYears = [];
	for (let i = 0; i < year.length; i++){
		const index = i;
		let years = year[index];
		if (years % 4 === 0){
			let leapYear = years;
			leapYears.push(leapYear);
		}
	}
	return leapYears;
};

const years = [2023, 2024, 2025, 2028, 2030];

const leapYears = findLeapYear(years);

console.log(leapYears);
 */

// sum odd number
/* 
function findOddSum(numbers){
	let oddNumbers = [];
	for (let i = 0; i < numbers.length; i++){
		let index = i; 
		let number = numbers[index];
		if (number % 2 !== 0){
			let oddNumber = number;
			oddNumbers.push(oddNumber);
		}
	}
	let oddNumbersSum = 0;
	for (let i = 0; i < oddNumbers.length; i++){
		let index = i;
		let oddNumber = oddNumbers[index];
		oddNumbersSum += oddNumber;
	}
	return oddNumbersSum;
}

const numbers = [54, 23, 45, 66, 57, 89, 65, 21, 36, 32, 54];

const oddNumbersSum = findOddSum(numbers);

console.log(oddNumbersSum) */