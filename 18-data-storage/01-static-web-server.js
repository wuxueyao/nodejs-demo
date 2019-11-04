#!/usr/bin/node
const http = require('http'),
      fs = require('fs');

//定义一个数据结构
var buf = {};

http.createServer((req,res)=>{
  console.log(req.url);
  if(req.url === '/favicon.ico') return;
  var fileName = __dirname + req.url;
  console.log(fileName);
  if(!fs.existsSync(fileName)) return;

  if(!buf[fileName]){
    console.log('read file')
    buf[fileName] = fs.readFileSync(fileName);
  }
  res.end(buf[fileName]);
}).listen(8080);

console.log(process.pid);
