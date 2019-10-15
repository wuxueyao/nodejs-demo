#!/usr/bin/node
const http = require('http'),
      log = console.log;

http.createServer((req,res)=>{
  //解析请求数据
  log('request method:',req.method);

  switch(req.method){
    case 'GET':
      select(req,res);
      break;
    case 'POST':
      insert(req,res);
      break;
    case 'PUT':
      update(req,res);
      break;
    case 'DELETE':
      remove(req,res);
      break;
    default:
      err(res);
  }
  res.end('OK');
}).listen(8080);


function select(req,res){
  res.end(req.method);
}
function insert(req,res){
  res.end(req.method);
}

function remove(req,res){
  res.end(req.method);
}
function update(req,res){
  res.end(req.method);
}
function err(res){
  res.end(req.method);
}
