#!/usr/bin/node
const log = console.log;
var buf1 = new Buffer(256);
buf1[0] = 0x11;

log('buf1 length:',buf1.length);
log('buf1:',buf1);


//for 循环的初始化
for(var i=0;i<buf1.length;i++) buf1[i] = i;
log('buf1:',buf1);

buf1.fill(0,0,256);
log('buf1:',buf1);

var buf2 = buf1.slice(250,256);
log('buf2:',buf2);
log('buf2:',buf2.toJSON());
log('buf2:',JSON.stringify(buf2));

var arr = ['a',0xba,0xbf,0x00,255,10];
var buf3 = new Buffer(arr);

var buf4 = new Buffer('Hello World');
log('buf4:',buf4);


buf4.copy(buf3,0,0,buf3.length);
log('buf3:',buf3);


var str = '你好 wnagding';
var buf5 = new Buffer(str);
log('buf5 length',buf5.length);
log('str.length:',str.length);


//初始化Buffer，()里可以是字符串、数组，也可以是数组长度  
