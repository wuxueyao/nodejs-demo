#!/usr/bin/node
//var argv = process.argv;

var expression = process.argv[2];

console.log(expression + '='+'%d',eval(expression));
