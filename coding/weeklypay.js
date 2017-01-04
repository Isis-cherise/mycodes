function weeklyPay (hours,rate){
	var otRate = rate * 1.5;
	var grossPay = hours * rate;
	var overTime = 0;
	if (hours > 40){
		var otHours = hours - 40;
		overTime = otHours * otRate;
	}
	grossPay = grossPay + overTime;
	console.log ('GrossPay = $'+ grossPay);
	return grossPay;
}
var x = weeklyPay (55,10);

function tax (grossPay){
	var atax = 0;
	if (grossPay > 200){
		atax = .10 * (grossPay - 200);
	} else {
		atax = 0;
	}
	return atax;
}
		
var y = tax (775);
console.log ('TAX Amount = $' + y);

function netPay (grossPay, atax){
	var netPay = (grossPay - atax);
	return netPay;
}
var z = netPay (x , y);
console.log ('NetPay = $' + z);