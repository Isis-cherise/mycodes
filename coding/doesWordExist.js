function doesWordExist (searchArray, wordToFind){
	var searchString = "";
	var b = false;
	var i = 0;
	for(var j = 0; j < wordToFind.length; j++){
		b = false;
		for(; i <= searchArray.length && b == false; i++){
			if (wordToFind[j] == searchArray[i]){
				searchString += wordToFind[j];
				b = true;
			}
		}
	}
	console.log (searchString);
	console.log (wordToFind);
	if(searchString == wordToFind){
		return true;
	}
		return false;
}
var a = "bpltsmilevrcsmilepi";
var b = "smile";
var x = doesWordExist (a, b);
console.log(x);

