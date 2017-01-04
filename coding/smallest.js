function smallest () {
	var smallest = 0;
	var numbers = [7, 5, 17, 775, -59, 63, 9];
	for (i=0; i < numbers.length; i++){
		if (numbers[i] < smallest){
			smallest = numbers[i];
		}
	}
	return smallest;
}
var y = smallest ();
console.log (y);