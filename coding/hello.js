//console.log("Hello World")
var x=0;
/*console.log(x);
var y=1;
console.log(x+y);
var name="Isis";
console.log(name);
if(x>0){
	console.log("this number is greater than zero")
}else{
	console.log("this number is less than zero")
}
for(var i=0;i<100;i++){
	var output=add(i,i+1);
	console.log (output);
}
function add(x,y){
	var result=0;
	result=x+y;
	return result;
}
var output = add(2,3);
console.log(output);
function subtract(a,b){
	result=a-b;
	var result=0;
	return result;
}
var output=subtract (5,2);
console.log(output);*/
function foo(b) {
	return b;
}
//var h = foo(9);
//console.log(h);

/*function isEven(a) {
	var even = false;
	for (;a >0;) {
		a = a - 2;
	}
	if (a == 0) {
		even = true;
	}
	return even;
}
//var y = isEven(70);
//console.log(y);

function printEvenNumbers(a) {
	for (var i = 0; i < a; i++) {
		var b = isEven(i);
		if ( b == true ) {
			console.log(i);
		}
	}

}
//printEvenNumbers(1043);

function Howmanyyears (days){

	var years = days / 365;
	console.log (years);
	var weeks = years * 52;
	console.log (weeks);
	var months = years * 12;
	console.log (months);
	var hours = 24 * days;
	console.log (hours);
}
//Howmanyyears(365);

function AzanaMoney (pennies){
	var den = 25;
    var whatsLeft = pennies;
    var quarterCount = 0;
    var dimeCount = 0;
    var nickelCount = 0;
    var pennyCount = 0;
    var result = 0;

    for (var i = 0; whatsLeft >= 0; i++) {
    	if (whatsLeft >= 25) {
	    	result = result + 25;
	    	whatsLeft = pennies - result;
	    	quarterCount++;
	    } else if (whatsLeft >= 10) {
	    	result = result + 10;
	    	whatsLeft = pennies - result;
	    	dimeCount++;

	    } else if (whatsLeft >= 5) {
	    	result = result + 5;
	    	whatsLeft = pennies - result;
	    	nickelCount++;

	    } else {
	    	pennyCount = whatsLeft;
	    	break;
	    }
    }
    console.log('quarters = ' + quarterCount);	
    console.log('dimes = ' + dimeCount);
    console.log('nickels = ' + nickelCount);
    console.log('pennies = ' + pennyCount);
}
//AzanaMoney(123);

function Isismoney (pennies){
	var quarters = 0;
	var dimes = 0;
	var nickels = 0;
	var penny = 0;
	var result = 0;
	var whatsLeft = 0;
	for (i = 0; whatsLeft >= 0; i++){
		quarters = quarters + (pennies / 25);
		whatsLeft = pennies - (Math.round(quarters) * 25);
		if (whatsLeft < 25 && whatsLeft > 5){
			dimes = dimes + (whatsLeft / 10);
			whatsLeft = whatsLeft - (Math.round(dimes) * 10);
		}
			
		if (whatsLeft < 10 && whatsLeft > 5){
			nickels = nickels + (whatsLeft / 5);
			whatsLeft = whatsLeft - (Math.round(nickels) * 5);
			break;
		}
		if (whatsLeft < 5) {
			penny = whatsLeft;
			break;

		}
			

	}
	console.log (Math.round(quarters));
	console.log (Math.round(dimes));
	console.log (Math.round(nickels));
	console.log (Math.round(penny));
}

		
Isismoney (136);
*/

/*function weeklyPay (hours,rate){
	var otRate = rate * 1.5;
	var grossPay = hours * rate;
	var overTime = 0;
	if (hours > 40){
		var otHours = hours - 40;
		overTime = otHours * otRate;
	}
	grossPay = grossPay + overTime;
	console.log ('GrossPay = $'+ grossPay);
	return grossPay;
}
var x = weeklyPay (55,10);

function tax (grossPay){
	var atax = 0;
	if (grossPay > 200){
		atax = .10 * (grossPay - 200);
	} else {
		atax = 0;
	}
	return atax;
}
		
var y = tax (775);
console.log ('TAX Amount = $' + y);

function netPay (grossPay, atax){
	var netPay = (grossPay - atax);
	return netPay;
}
var z = netPay (x , y);
console.log ('NetPay = $' + z);

function distanceTraveled (miles, liters){
		var gallons =liters * 3.78541;
		var distance = miles / gallons;
		return distance;
	
}
var x = distanceTraveled (500, 20);
console.log ('Distance Traveled = ' + x);


	/*var arr = [];
	arr [1] = 1;
	arr [2] = 2;
	arr [3] = 'fizz';
	arr [4] = 4;
	arr [5] = 'buzz';
	arr [6] = 'fizz';
	arr [7] = 7;
	arr [8] = 8;
	arr [9] = 'fizz';
	arr [10] = 'buzz';
	arr [11] = 11;
	arr [12] = 'fizz';
	arr [13] = 13;
	arr [14] = 14;
	arr [15] = 'fizzBuzz';
	arr [16] = 16;
	arr [17] = 17;
	arr [18] = 'fizz';
	arr [19] = 19;
	arr [20] = 'buzz';

for (var i = 0; i <= 20; i++){
	console.log (arr [i]);
}*/

/*function fizzBuzz (){
	
	for (i=1; i<=45; i++){
		if ((i%3) == 0 && (i%5) == 0) {
			console.log('fizz buzz');
		}
		else if ((i%3) == 0){
			console.log('fizz');
		} else if ((i%5) == 0) {
			console.log('buzz');
		} else {
			console.log(i);
		}		
	}

}
fizzBuzz();
*/

function greatest() {
	var biggest = 0;
	var number = [1, 35, 14, 500, 77, -1, 44, 55, 789, 234];
	for (i=0; i < number.length; i++){
		if (number[i] > biggest){
			biggest = number[i];
		}
	}
	return biggest;
}
var x = greatest();
console.log (x);

function smallest () {
	var smallest = 0;
	var numbers = [7, 5, 17, 775, -59, 63, 9];
	for (i=0; i < numbers.length; i++){
		if (numbers[i] < smallest){
			smallest = numbers[i];
		}
	}
	return smallest;
}
var y = smallest ();
console.log (y);

function addEm (){
	var sum = 0;
	var arr = [5, 7, 3, 21, 1];
	for (i=0; i<arr.length; i++){
		sum = sum + arr[i];
	}
	return sum;
}
var z = addEm ();
console.log (z);

function onlyTen (){
	var sum = 0;
	var arr = [20, 8, 7, 11, 110, 1];
	for (i=0; i < arr.length; i++){
		if ((arr[i])%10 == 0){
			sum = sum + arr[i];
		}
	}
	return sum;
}
var t = onlyTen ();
console.log (t);

function average (){
	var sum = 0;
	var arr = [5, 4, 5];
	for (i =0; i < arr.length; i++){
		sum = sum + arr [i];
		avg = sum / arr.length;
	}
	return avg;
}
var a = average ();
console.log (a);


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

function reverse (){
	var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	for (i = arr.length - 1; i >= 0; i--){
		console.log (arr[i]);
	}
}
reverse ();

function arrayToArray (arr){
	var otherarray = [];
	for (i = 0; i < arr.length; i++){
		if ((arr [i]) % 3 == 0){
			otherarray.push(arr[i]);
		}
	}
	return otherarray;
}

var a = [9, 15, 7, 5, 18];
var b = arrayToArray (a);
console.log (b);

function rectangleSquareArea (length, width){
	var area = length * width;
	return area;
}
var r = rectangleSquareArea (12, 10);
console.log ('Area = ' + r);

function triangleArea (base, height){
	var area = (base * height) / 2;
	return area; 
}
var t = triangleArea (5, 2);
console.log ('Area = ' + t);

function circleArea (radius){
	var area = 3.14 * (radius * radius);
	return area;
}
var c = circleArea (5);
console.log ('Area = ' + c);

function arrayCount (arr) {
	var count = 0;
	var arr = [3, 5, 7, 9, 7, 3, 1, 0, 7];
	for (i = 0; i < arr.length; i++){
		count = arr.length;
	}
	return count;
}
var c = arrayCount ();
console.log (c);

function middle (arr){
	var arr = [3, 25, 101, 9, 7];
	var m = arr.length / 2;
	m = Math.floor (m);
	return arr [m];
}
var m = middle (3, 25, 101, 9, 7);
console.log (m);

function merge (arr1, arr2){
	var arr3 = [0, 0, 5, 101, 23];
	for (var i = 0; i < arr1.length; i++){
		arr3.push(arr1[i]);
	}
	for (var j = 0; j < arr2.length; j++){
		arr3.push(arr2[j]);
	}
	return arr3;
}
var b = [1, 2, 3];
var c = [4, 5, 6];
var result = merge (b, c);
console.log	(result);



