function printEvenNumbers(a) {
	for (var i = 0; i < a; i++) {
		var b = isEven(i);
		if ( b == true ) {
			console.log(i);
		}
	}

}
printEvenNumbers(1043);