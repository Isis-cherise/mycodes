function military (hour, minutes, ap){
	var hours = 0;
	if(hour >= 1 && hour <= 9 && ap == 'AM'){
		console.log (hour + minutes + 'hours');
	}
	if(hour == 10 && ap == 'AM' || hour == 11 && ap == 'AM'){
		console.log (hour + minutes + 'hours');
	}
	if(hour == 12 && ap == 'AM'){
		console.log ('00' + minutes + 'hours');
	}
	if(hour <= 12 && ap == 'PM'){
		hours = parseInt(hour) + 12;
		console.log (hours + minutes + ' hours');
	}
}
var time = process.argv[2];

if (time.length < 7) {
	console.log('invalid time format');
} else {
	var h = time.slice(0,2);
	if (parseInt(h) > 12) {
		console.log('invalid hour');
		return;
	}
	var app = time.slice(5,7);
	var m = time.slice(3,5);
	if (parseInt(m) > 59) {
		console.log('invalid minutes');
		return;
	}
	military (h, m, app);
}
