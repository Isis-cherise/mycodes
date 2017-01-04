function merge (arr1, arr2){
	var arr3 = [0, 0, 5, 101, 23];
	for (var i = 0; i < arr1.length; i++){
		arr3.push(arr1[i]);
	}
	for (var j = 0; j < arr2.length; j++){
		arr3.push(arr2[j]);
	}
	return arr3;
}
var b = [1, 2, 3];
var c = [4, 5, 6];
var result = merge (b, c);
console.log	(result);