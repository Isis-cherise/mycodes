function subDiv2 (arr, value){
	if (typeof value !== "number"){
		return 'Value must be a number';
	}
	if (typeof arr !== "object"){
		return 'Array must be an array';
	}
	if (arr.length < 2){
		return 'Add more numbers to the array';
	}
	var first = 0;
	var second = 0;
	var sub = 0;
	var div = 0;
	for (var i = 0; i < arr.length; i++){
		if (value < arr[i]){
			first = arr[i];
		}
		for (var j = 0; j < arr.length; j++){
			if (value < arr[j] && arr[j] < arr[i]){
				second = arr[j];
				sub = first - second;
				div = sub / 2;
			}
			if (div == 2){
				console.log ({'first':first, 'second':second});
				div = 0;
			}
		}
	}
}
var arr = [7, 0, 4, 12, 8, 3, 20,  16 , 0 , 55 ,51];
var value = 2;
subDiv2 (arr, value);
