function newPower (num, exp){
	var result = 1;
	for (i = 0; i < exp; i++){
		result = result * num;
	}
	return result;
}
var num = process.argv[2];
var exp = process.argv[3];
var x = newPower (num, exp);
console.log (x);
