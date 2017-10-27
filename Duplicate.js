function Duplicate (arr) {
	var arr = [1, 5, 7, 9, 4, 7, 55, 1, 2, 3, 55, 1];
	for (i = 0; i < arr.length; i++){
		for (j = i + 1; j < arr.length; j++){
			if (arr[i] == arr[j]){
				console.log ('The duplicates are:' + arr[i]);
			}
		}
	}
}
Duplicate ();
