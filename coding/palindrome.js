function palindrome (arr) {
   var reverseWord = [];
   if (arr == undefined || reverseWord == undefined){
      return ['you are an idiot!']
   }
   for (var i = arr.length - 1; i >= 0; i--) {
       reverseWord += arr [i];
   		}
   		if (arr == reverseWord){
   			console.log (arr + ' is a palindrome')
   		}else {
   			console.log (arr + ' is not a palindrome');
   			}
 		return reverseWord;
 	}
var word = "cat";
var x = palindrome (word);
module.exports = palindrome;
