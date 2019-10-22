#!/usr/bin/node
const http = require('http'),
      log = console.log;

var total = 1;//访问次数计数器
http.createServer((req,res)=>{
  log(`${req.method} ${req.url} ${req.httpVersion}`);
  log(req.headers);
  log();
      
  if(req.url === '/favicon.ico'){
    return;
  }
  log('I haved %d times'.total++);
  var count = 1;
  if(typeof req.headers.cookie !== 'undefined'){
    //parse cookie
    var data = req.headers.cookie.split('=');
    var count = Number(data[1])+1;
    log(data);
  }
  res.statusCode = 200;

  //在value里边用分号隔开加max-age=1000(s)，会存储长,是永久cookie
  //删掉max-age就是会话cookie，不能永久计数
  res.setHeader('Set-cookie',[`count=${count};max-age=10`]);
  res.end(`visited ${count} times`)
  res.end('hello William')
  res.end('hello world');
}).listen(8080);
