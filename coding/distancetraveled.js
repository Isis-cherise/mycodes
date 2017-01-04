function distanceTraveled (miles, liters){
		var gallons =liters * 3.78541;
		var distance = miles / gallons;
		return distance;
	
}
var x = distanceTraveled (500, 20);
console.log ('Distance Traveled = ' + x);
