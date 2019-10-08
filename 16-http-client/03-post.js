#!/usr/bin/node

const http = require('http'),
      addr = 'http://localhost:8080/',
      url = require('url');

//var msg = process.argv[2] || 'Hello I am post!';

var option = url.parse(addr);
option.method = 'POST';



var req = http.request(option,function(res){
  //print start line
  console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
  
  //print response header
  console.log(res.headers);
  console.log('');

  //print response body
  res.pipe(process.stdout);
});

req.end('Hello server!');
