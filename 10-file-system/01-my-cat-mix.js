#!/usr/bin/node

const fs = require('fs'),
      file = process.argv[2] || __filename;

try{
  //下边三句都是同步的，所以可以放在try中
  const fid = fs.openSync(file,'r');

  console.log(fs.readFileSync(fid).toString('utf8'));

  fs.closeSync(fid);
}catch(e){
  console.error(e.message);
  process.exit(1);
}
