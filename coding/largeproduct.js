function large (){
	
	var biggest = 0;
	var nextbig = 0;
	var arr = [1, 3, 5, 8];
	for (var i = 0; i < arr.length; i++){
		if (arr[i] > biggest){
			biggest = arr [i];
		}	
		if (arr[i] < biggest && arr[i] > nextbig){
			nextbig = arr[i];
		}	 
	}
	product = biggest * nextbig;
	console.log (biggest);
	console.log (nextbig);
	return product;
}
var x = large ();
console.log (x);