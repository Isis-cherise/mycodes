
var numbers = process.argv;


function average (arr){
	var sum = 0;
	
	for (var i =2; i < arr.length; i++){
		sum = sum + parseInt(arr[i]);
		
	}
	return sum/(arr.length - 2);
}

var a = average (numbers);
console.log (a);