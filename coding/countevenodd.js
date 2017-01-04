
function countEvenOdd (){
	var oddTotal = 0;
	var evenTotal = 0;
	var arr = [2, 3, 5, 7, 8];
	for (i = 0; i < arr.length; i++){
		if (arr [i] % 2 == 0){
			evenTotal++;
		}
		else {
				oddTotal++;
		}
			
	}
	console.log (evenTotal);
	console.log (oddTotal);
}
countEvenOdd();