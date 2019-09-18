#!/usr/bin/node

const fs = require('fs'),
      file = process.argv[2] || __filename;

console.log(fs.readSync(file).toString('utf8'));

if(fs.existsSync(file)){
  console.log(fs.resdFileSync(file).toString('utf8'));
}else{
  console.error('%s not exist!',file);
  process.exit(1);
}
