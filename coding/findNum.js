function findNum (){
	var arr = [3, 1, 5, 7, 9, 10];
	var thatThing = 0;
	var otherThing = 0;
	var sum = 13;
	for (var i = 0; i < arr.length; i++){
		if (arr[i] < sum){
			thatThing = arr[i];
		}
		if (arr[i] + thatThing == sum){
			otherThing = arr[i];
		}
		if (thatThing + otherThing == sum){
			console.log (thatThing);
			console.log (otherThing);
		}
	}
	return thatThing;
	return otherThing;
}		
var s = findNum;
console.log (s);