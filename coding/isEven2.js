function isEven(a) {
	var even = false;
	for (;a >0;) {
		a = a - 2;
	}
	if (a == 0) {
		even = true;
	}
	return even;
}
var a = process.argv[2];
var y = isEven(a);
console.log(y);