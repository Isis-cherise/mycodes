function square (w,h) {
	var area = w*h;
	return area;
}
//var a = square (4,4);
//console.log ('the area of a square is ' + a);
module.exports.psquare = square;

function rectangle (l,w) {
	return square (l,w);
}
//var b = rectangle (8,4);
//console.log ('the area of a rectangle is ' + b);
module.exports.prectangle = rectangle;

function triangle (b,h) {
	var tri = b*h/2;
	return tri;
}
//var t=triangle(8,16);
//console.log ('the area of the triangle is ' + t);
module.exports.ptriangle = triangle;

function circle (r) {
	var p = 3.14;
	var pie = p*r*r;
	return pie;
}
//var c=circle (8);
//console.log ('the area of a circle is ' + c);
module.exports.pcircle = circle;
