function leap (year){
var leapYear = false;
var newLeap = year;
	if (year % 4 == 0){
		leapYear = true;
			for ( var i = 0; i < 20; i++){
				newLeap = newLeap + 4;
				console.log (newLeap);
			}
	}else if (year % 100 == 0 && year % 400 !== 0){
		leapYear = false;
	}	
	return leapYear;

}

var date = 1990;
var l = leap (date);
console.log (l);
