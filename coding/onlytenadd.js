function onlyTen (){
	var sum = 0;
	var arr = [20, 8, 7, 11, 110, 1];
	for (i=0; i < arr.length; i++){
		if ((arr[i])%10 == 0){
			sum = sum + arr[i];
		}
	}
	return sum;
}
var t = onlyTen ();
console.log (t);