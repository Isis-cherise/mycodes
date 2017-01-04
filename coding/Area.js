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