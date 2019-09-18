#!/usr/bin/node

const fs = require('fs'),
      file = process.argv[2] || __filename;

var source = fs.createReadStream(file);

source.pipe(process.stdout);

source.on('error',function(err){
  console.error(err.message);
})

//上边两句和这个一样，这个无法捕获异常
//fs.createReadStream(file).pipe(process.stdout);


