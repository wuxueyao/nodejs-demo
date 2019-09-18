#!/usr/bin/node

const fs = require('fs'),
      file = process.argv[2] || __filename;

fs.readFile(file,function(err,data){
  if(err){
    console.log(err.message);
    process.exit(1); //非0的退出码
  }else{
    console.log(data.toString('utf8'));
  }
});

