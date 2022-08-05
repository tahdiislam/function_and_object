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

