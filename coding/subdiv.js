function subDiv (array, value){
	var first = 0;
	var second = 0;
	var sub = 0;
	for (var i = 0; i < array.length; i++){
		if (value < array [i]){
			first = array [i];
		}
		for (var j = 0; j < array.length; j++){
			if (value < array [j] && array [j] < array [i]){
				second = array [j];
				sub = first - second;
			}
			if (sub / 2 == 2)
				return {'first': first,
			            'second': second
			        };
		}
	}
}
var array = [0, 0, 4, 12, 8, 3];
var value = 2;
var z = subDiv (array, value);
console.log (z);