function merge2 (arr1, arr2){
	var arr3 = [];
	var i = 0;
	var j = 0;
	while (i < arr1.length && j < arr2.length){
		arr3.push(arr1[i]);
		arr3.push(arr2[j]);
		i++;
		j++;
	}
	return arr3;
}
var a = [4, 6, 7, 2, 3];
var b = [3, 1, 2, 9, 5];
var r = merge2 (a, b);
console.log (r);