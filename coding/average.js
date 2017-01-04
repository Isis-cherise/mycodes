function average (){
	var sum = 0;
	var arr = [5, 4, 5];
	for (i =0; i < arr.length; i++){
		sum = sum + arr [i];
		avg = sum / arr.length;
	}
	return avg;
}
var a = average ();
console.log (a);