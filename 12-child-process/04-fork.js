#!/usr/bin/node

const cp = require('child_process');


var child = cp.fork(['./02-child.js']);

//child.stdout.pipe(process.stdout);
console.log('I am father with id:%d:',process.pid);


global.setTimeout(function(){
  child.send('Hello I am your father');
},2000);
