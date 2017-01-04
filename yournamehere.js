function whatsYourName (name){
	for (var i = 0; i <= 9; i++){
		if (name !== 'Mitchell'){
			console.log(name);
		}
	}	
	for (var j = 0; j <=4; j++){
		if (name == 'Mitchell'){
			console.log(name);
		}
	}
}
var input = process.argv[2];
var yourName = whatsYourName (input);
