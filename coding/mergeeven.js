function mergeEven (arr1, arr2){
	var arr3 = [];
	for (var i = 0; i < arr1.length; i++){
		if (arr1[i] % 2 == 0){
			arr3.push(arr1[i]);
		}
	}
	for (var j = 0; j < arr2.length; j++){
		if (arr2[j] % 2 == 0){
			arr3.push(arr2[j]);
		}
	}
	return arr3;
}
var arr1 = [1, 2, 3, 4];
var arr2 = [5, 6, 7, 8];
var result = mergeEven (arr1, arr2);
console.log (result);