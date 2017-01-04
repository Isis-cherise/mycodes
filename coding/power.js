function list (){
	var squareRoot;
	var fourthRoot;
	var square;
	var fourthpower;
	for ( var i = 0; i <= 25; i++){	
		square = i * i;
		console.log('square  = ' + square);

		fourthpower = square * square;
		console.log('fourth power = ' + fourthpower);


		squareRoot = Math.sqrt(i);
		console.log('square root = ' + squareRoot);

		fourthRoot = Math.sqrt(squareRoot);
		console.log('fourth root = ' + fourthRoot);
		
		
	}
	
}
list ();
