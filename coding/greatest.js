function greatest() {
	var biggest = 0;
	var number = [1, 35, 14, 500, 77, -1, 44, 55, 789, 234];
	for (i=0; i < number.length; i++){
		if (number[i] > biggest){
			biggest = number[i];
		}
	}
	return biggest;
}
var x = greatest();
console.log (x);