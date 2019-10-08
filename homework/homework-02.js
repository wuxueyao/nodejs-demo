#!/usr/bin/node

const fs = require('fs'),
      argv = process.argv[2],
      dir = process.argv[3] || __dirname;

switch(argv){
  case 'list':
    for(var i=0;i<fs.readdirSync(dir).length;i++){
      console.log('{"fileName": "%s","fileSize": "%s"}',fs.readdirSync(dir)[i],fs.statSync(fs.readdirSync(dir)[i]).size);

    }
    break;

  case 'mkdir':
    fs.mkdirSync(dir);
    break;

  default:
    console.log('参数输入错误,请重新输入！');
    break;
}

