#!/usr/bin/node
const http = require('http'),
      log = console.log;
http.createServer((req,res)=>{
  log(`${req.method} ${req.url} ${req.httpVersion}`);
  log(req.headers);
  log();

  
  if(typeof req.headers.cookie !== 'undefined'){
    //parse cookie
    var data = req.headers.cookie.split(';');
    log(data);
  }
  res.statusCode = 200;

  //在value里边用分号隔开加max-age=1000，会存储长
  res.setHeader('Set-cookie',['name=William','phone=5211130']);
  res.end('hello William')
  res.end('hello world');
}).listen(8080);
