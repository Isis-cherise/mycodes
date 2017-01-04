function findSumInArray (arrayToSearch, sum){
	var theSum = 0;
	for (var i = 0; i < arrayToSearch.length; i++){
		if(arrayToSearch[i] < sum){
			theSum = arrayToSearch[i];
			for (var j = 0; j < arrayToSearch.length; j++){
				if (arrayToSearch[j] < sum && arrayToSearch[i] + arrayToSearch[j] == sum){
					console.log (arrayToSearch[i],arrayToSearch[j]);
					break;
				}else {
					console.log ('These numbers do not equal the sum : ' + arrayToSearch[j] + " " +arrayToSearch [i]);
				}		
			}
		}	
	}
}
var arrayToSearch = [6, 4, 3, 7, 8, 9];
var sum = 12;
var x = findSumInArray (arrayToSearch, sum);
