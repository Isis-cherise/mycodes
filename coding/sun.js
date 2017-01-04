function sunSign (month, days){
		if(month == 3 && days >= 21 && days <= 31){
			console.log ('You are an Aries');
		}
		if(month == 4 && days <= 19){
			console.log ('You are an Aries');
		}
		if(month == 4 && days >= 20 && days <= 30){
			console.log ('You are a Taurus');
		}
		if(month == 5 && days >= 20 && days <= 31){
			console.log ('You are a Taurus');
		}
		if(month == 5 && days >= 21 && days <= 31){
			console.log ('You are a Gemini');
		}
		if(month == 6 && days <= 20 && days <= 30){
			console.log ('You are a Gemini');
		}
		if(month == 6 && days >= 21 && days <= 30){
			console.log ('You are a Cancer');
		}
		if(month == 7 && days <= 22){
			console.log ('You are a Cancer');
		}
		if(month == 7 && days >= 23 && days <= 30){
			console.log ('You are a Leo');
		}
		if(month == 8 && days <= 22){
			console.log ('You are a Leo');
		}
		if(month == 8 && days >= 23 && days <= 31){
			console.log ('You are a Virgo');
		}
		if(month == 9 && days <= 22){
			console.log ('You are a Virgo');
		}
		if(month == 9 && days >= 23 && days <= 30){
			console.log ('You are a Libra');
		}
		if(month == 10 && days <= 22){
			console.log ('You are a Libra');
		}
		if(month == 10 && days >= 23 && days <= 31){
			console.log ('You are a Scorpio');
		}
		if(month == 11 && days <= 21){
			console.log ('You are a Scorpio');
		}
		if(month == 11 && days >= 22 && days <= 30){
			console.log ('You are a Sagittarius');
		}
		if(month == 12 && days <= 21){
			console.log ('You are a Sagittarius');
		}
		if(month == 12 && days >= 22 && days <= 31){
			console.log ('You are a Capricorn');
		}
		if(month == 1 && days <= 19){
			console.log ('You are a Capricorn');
		}
		if(month == 1 && days >= 20 && days <= 31){
			console.log ('You are an Aquarius');
		}
		if(month == 2 && days <= 18){
			console.log ('You are an Aquarius');
		}
		if(month == 2 && days >= 19 && days <= 28){
			console.log ('You are a Pisces');
		}
		if(month == 3 && days <= 20){
			console.log ('You are a Pisces');
		}
}
var month = process.argv[2];
var days = process.argv[4];
sunSign (month, days);