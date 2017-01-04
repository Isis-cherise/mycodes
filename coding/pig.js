function isVowel (character){
	var letters = ["a", "e", "i", "o", "u"];
	var b = false;
	for (var i = 0; i < letters.length; i++){
		if (character == letters[i]){
			b = true;
			break;
		}	
	}
	return b;
}	
function igpay (ogword){
	var letters = ["a", "e", "i", "o", "u"];
	var ogWord = ogword;
	var pigLatin = "";


		if (isVowel(ogWord[0]) == false && isVowel(ogWord[1]) == true){
			pigLatin = ogWord.slice(1) + ogWord[0] + 'ay';
		} else if (isVowel (ogWord[0]) == true){
			pigLatin = ogWord + 'way';
		}else if (isVowel (ogWord[0]) == false && isVowel (ogWord[1]) == false){
			pigLatin = ogWord.slice(2) + ogWord[0] + ogWord[1] + 'ay';
		}
	
	return pigLatin;
}
var word = "happiness";
var x = igpay (word);
console.log (x);











