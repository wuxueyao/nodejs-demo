#!/usr/bin/node
const http = require('http'),
      log = console.log;

var items =[];
http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log('');
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
  var data = JSON.stringify(items);
  res.setHeader('Content-Length',Buffer.byteLength(data));
  res.setHeader('COntent-Type','text/plain; charset="utf-8"');
  res.setHeader('Access-Control','*'); //跨域访问

  res.end(data);
}

function insert(req,res){
  var item = '';
  req.on('data',(data)=>{
    item += data;
  });
  req.on('end',()=>{
    if(typeof item !== 'undefined'){
      items.push(item);
      res.end('Insert OK!');
    }else{
      res.end('Insert Error!');
    }
  });
}

function remove(req,res){
  var id = req.url.slice(1,req.url.length);   //去掉斜杠
  //验证id validate id: 1. type 2. range
  
  //del items[id]
  items.splice(id,1);
  res.end('Delete OK!');
}

function update(req,res){
  //parse url get id,validate id,type and range
  
  //parse req get content,validate content now blank
  
  //modify items,items[id] = new content
  res.end(req.method);
}

function err(res){
  res.end(req.method);
}
