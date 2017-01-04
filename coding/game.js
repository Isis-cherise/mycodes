function game (guess){
	var myNumber = 53;
	if(guess < myNumber){
		console.log ('Too low');
	}
	if(guess > myNumber){
		console.log ('Too high');
	}
	if(guess == myNumber){
		console.log ('CORRECT!');
	}
}
var guess = process.argv[2]
game (guess);