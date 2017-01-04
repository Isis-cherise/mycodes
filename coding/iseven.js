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
var y = isEven(70);
console.log(y);