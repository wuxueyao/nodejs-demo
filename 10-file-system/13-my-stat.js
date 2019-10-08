#!/usr/bin/node

const fs = require('fs'),
      dst = process.argv[2];
      //dst = process.argv[2] || __filename;

//try{
//  console.log(fs.statSync(dst));
//}catch(err){
//  console.error(err.message);
//  process.exit(1);
//}

console.log(fs.statSync(dst));
