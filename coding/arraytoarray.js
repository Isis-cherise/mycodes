function arrayToArray (arr){
	var otherarray = [];
	for (i = 0; i < arr.length; i++){
		if ((arr [i]) % 3 == 0){
			otherarray.push(arr[i]);
		}
	}
	return otherarray;
}

var a = [9, 15, 7, 5, 18];
var b = arrayToArray (a);
console.log (b);