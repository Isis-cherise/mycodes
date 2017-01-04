function largePrime (arr){
	var arr2 = [];
	var largest = 0;
	var prime = 0;
	for (var i = 0; i < arr.length; i++){
		if ((arr[i] % 2 !== 0 || arr[i] === 2) &&  
			(arr[i] % 3 !== 0 || arr[i] === 3)&& 
			(arr[i] % 5 !== 0 || arr[i] === 5)&& 
			(arr[i] % 7 !== 0 || arr[i] === 7)&& 
			(arr[i] % 11 !== 0 || arr[i] ===11)&& 
			(arr[i] % 13 !== 0 || arr[i] === 13)){
			prime = arr[i];
			arr2.push(prime);
		}
	for (var j = 0; j < arr2.length; j++){
		if (arr2[j] > largest && arr2[j] > 1){
			largest = arr2[j];
			}
		}
	}
	if (largest <= 1){
		console.log ('No prime numbers found');
	}
	if (largest > 0) {
		console.log(largest);
	}
}
var arr = [2, 6, 1, 10, 179, 82];
largePrime (arr);