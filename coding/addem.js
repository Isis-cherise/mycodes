function addEm (){
	var sum = 0;
	var arr = [5, 7, 3, 21, 1];
	for (i=0; i<arr.length; i++){
		sum = sum + arr[i];
	}
	return sum;
}
var z = addEm ();
console.log (z);