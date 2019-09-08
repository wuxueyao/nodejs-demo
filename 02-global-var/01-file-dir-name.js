#!/usr/bin/node
console.log('dir name:',__dirname);
console.log('file name:',__filename);

//opterate data file
var file=__dirname+'/data/db.xml';
console.log('file name:',file);

//windowa data file
file = __dirname+'\\data\\db.xml';
console.log('file name in windows:',file);
