function middlePlace (arr){
	var arr1 = [55, 7, 6, 0, 8, 6, 9];
	var n = 5;
	var arr4 =[];
	var lastElement =[arr1.length +1];
	for (i = 0; i < arr1.length; i++){
		var sliced = arr1.slice (0, [arr1.length/2]);
		var sliced2 = arr1.slice ([arr1.length/2], lastElement);
		var x = sliced;
		var y = sliced2;
	}
		
		console.log (arr1.length/2);
		console.log (x);
		console.log (y);
		arr4.push (x, n, y);
		console.log (arr4);
}
middlePlace ();