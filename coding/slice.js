/*var fruit = ['banana', 'apple', 'lemon', 'avacado'];
var f = fruit.slice(1, 3);
console.log (f);

var num = '156356';
var x = num.slice(1, 4);
console.log (x);*/


/*var z = 0;
var arr = [1, 2, 3, 4, 5];
function sum (a){
	z = z + a;
	console.log (a);
}
arr.forEach(sum);
console.log (z);*/

var z = 0;
var arr = [1, 2, 3, 4];
arr.forEach(function (a){
	z = z + a;
});
console.log (z);

var arr = ['james','is', 'not', 'cool'];
var truth = arr.splice(2, 1);
console.log (arr);
