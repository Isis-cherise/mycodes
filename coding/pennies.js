function Isismoney (pennies){
	var quarters = 0;
	var dimes = 0;
	var nickels = 0;
	var penny = 0;
	var result = 0;
	var whatsLeft = 0;
	for (i = 0; whatsLeft >= 0; i++){
		quarters = quarters + (pennies / 25);
		whatsLeft = pennies - (Math.round(quarters) * 25);
		if (whatsLeft < 25 && whatsLeft > 5){
			dimes = dimes + (whatsLeft / 10);
			whatsLeft = whatsLeft - (Math.round(dimes) * 10);
		}
			
		if (whatsLeft < 10 && whatsLeft > 5){
			nickels = nickels + (whatsLeft / 5);
			whatsLeft = whatsLeft - (Math.round(nickels) * 5);
			break;
		}
		if (whatsLeft < 5) {
			penny = whatsLeft;
			break;

		}
			

	}
	console.log (Math.round(quarters));
	console.log (Math.round(dimes));
	console.log (Math.round(nickels));
	console.log (Math.round(penny));
}