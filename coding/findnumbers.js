function findNum (arr, value){
	var num = 0;
	for (var i = 0; i < arr.length; i++){
		if (arr[i] < value){
			num = arr[i];
				for (var j = 0; j < arr.length; j++){
					if (arr[j] < num && arr[i] + arr[j] == value){
						console.log ('The numbers that equal the value are ' + arr[i], arr[j]);
						break;
					}	
			}
		}	
	}
}		
var arr = [4, 7, 9, 1, 5];
var value = 13;
var z = findNum (arr, value);
