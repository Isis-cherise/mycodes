function margin (revenue, cost){
	var margin1 = 0;
	var margin2 = 0;
	if (cost > 0 || cost < 0){
		margin1 = revenue - cost;
		margin2 = margin1 / revenue;
	}
	return margin2;
}
var a = 5;
var b = -3;
var whatismargin = margin (a, b);
console.log (whatismargin);