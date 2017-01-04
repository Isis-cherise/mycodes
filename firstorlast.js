function firstOrLast (arr){
	var first = 'Isis';
	var last = 'Williams';
	var sum = 0;
	for (var i = 0; i < arr.length; i++){
		sum = sum + arr[i];
	}	
	if (sum % 10 == 0){
		console.log (first);
	}
	if (sum % 3 == 0){
		console.log (last);
	}
	if (sum % 10 !== 0 && sum % 3 !==0){
		console.log ('Change numbers in array to be divisible by 10 or 3 when added');
	}
}
var arr = [10, 5, 3, 2, 7, 3, 1, 2];
firstOrLast (arr);