function consecutive (arr){
	var arr = [];
	for (var i = 0; i < arr.length; i++){
		if(arr[i] == arr[i] + 1 || arr[i] == arr[i] - 1){
			console.log ('Your sequence is consecutive');
		}else{
			console.log ('Your sequence is not consecutive');
		}
	}
}
var arr = process.argv[3];
consecutive (arr);