#!/usr/bin/node
const http = require('http'),
      log = console.log,
      qs = require('querystring'),
      url = require('url');
http.createServer((req,res)=>{
  log('request URL:',req.url);

  //var addr = url.parse(req.url);
  var addr = url.parse('https://wangding:123@www.baidu.com:8080/a/b/c?age=28&color=green#/def/efg');
  log('protocol:',addr.protocol);
  log('auth:',addr.auth);
  log('username:',addr.username);
  log('password:',addr.password);
  log('host:',addr.host);
  log('port:',addr.port);

  log('path-name:',addr.pathname);
  log('path parse:',addr.pathname.split('/'));
  log('query string:',addr.query);
  log('qs parse:',qs.parse(addr.query));
  log('hash:',addr.hash);

  res.end('OK!');
}).listen(8080);
