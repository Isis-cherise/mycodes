function whatMonth (month){
	var calendar = {
	 1 :'January',
	 2 :'February',
	 3 :'March', 
	 4 :'April',
	 5 :'May',
	 6 :'June',
	 7 :'July',
	 8 :'August',
	 9 :'September',
	 10:'October',
	 11:'November',
	 12:'December'
	}
	return calendar[month];
}
var input = process.argv[2];
if (input !== undefined) {
	var month = whatMonth(input);
	console.log('The month is ' + month);
}

