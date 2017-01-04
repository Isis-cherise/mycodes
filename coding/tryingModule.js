

var sq = require('./pattyModule.js').psquare;
var c = require('./pattyModule.js').pcircle;
var tri = require('./pattyModule.js').ptriangle;
var rec = require('./pattyModule.js').prectangle;


if (process.argv[3] == 'sq'){
var length = process.argv[4];
var width = process.argv[5];
var s = sq(length,width);
console.log('area of square is ' + s);
}

if (process.argv[3] == 'c'){
var radius = process.argv[4];
var ci = c(radius);
console.log('area of circle is ' + ci); 
}

if (process.argv[3] == 'tri'){
var base = process.argv[4];
var height = process.argv[5];
var t = tri (base, height);
console.log('area of triangle is ' + t);
}

if (process.argv[3] == 'rec'){
var length = process.argv[4];
var width = process.argv[5];
var r = rec (length, width);
console.log('area of rectangle is ' + r);
}


