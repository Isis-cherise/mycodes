function deleteMiddle (arr1){
	var newArr = [];
	var m = arr1.length / 2;
	m = Math.floor (m);

	for (var i = 0; i < arr1.length; i++) {
		if (i != m) {
			newArr.push(arr1[i]);
		}
	}
	return newArr;
}

var myArray = [1, 2, 3, 4, 5];
var d = deleteMiddle (myArray);
console.log (d);

function insert (arr, element){
	var newArr = [];
	var hasElementBeenInserted = false;
	if (arr == undefined || element == undefined){
		return [];
	}
	for (var i = 0; i < arr.length; i++){
		if (arr [i] < element || hasElementBeenInserted == true){
			newArr.push(arr[i]);
		}else if (hasElementBeenInserted == false){
			newArr.push(element);
			newArr.push(arr[i]);
			hasElementBeenInserted = true;
		}
	}
	if (hasElementBeenInserted == false){
		newArr.push(element);
	}
	return newArr;
}
var thisarray = [1, 2, 4, 5, 7];
var element = 60000;
var results = insert (thisarray, element);
console.log (results);