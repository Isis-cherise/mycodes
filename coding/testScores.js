function testScores (arr){
	var largest = 0;
	var smallest = arr[0];
	var sum = 0;
	for (var i = 0; i < arr.length; i++){
		if (arr[i] > largest){
			largest = arr[i];
		}
		if (arr[i] < smallest){
			smallest = arr[i];
		}
		sum = sum + arr[i];
		average = sum / arr.length;
	}
	console.log ('Largest = ' + largest);
	console.log ('Smallest = ' + smallest);
	return ('Average = ' + average);
}
var arr = [79, 99, 30, 100, 98];
var x = testScores (arr);
console.log (x);




