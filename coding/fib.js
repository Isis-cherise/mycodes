var first = 0;
var sum = 0;
var result = 1;
function fibonacci (number){
	for(var i = 0; i < number; i++){
		sum = first;
		first = result;
		result = sum + first;
		console.log (result);
	}
}
fibonacci (50);
