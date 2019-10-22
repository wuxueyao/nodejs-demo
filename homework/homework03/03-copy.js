#!/usr/bin/node
const http = require('http'),
      url = require('url'),
      log = console.log,
      qs = require('querystring'),
      fs = require('fs');
var items = [];

http.createServer((req,res)=>{
  req.url = url.parse(req.url).pathname;
  switch(req.method){
    case 'GET':
      res.writeHead(200,{
        'Content-Type':'text/html'
      });
      select(req,res);
      break;
    case 'POST':
      var it = '';
      req.on('data',(data)=>{
        it += data;
      });
      req.on('end',()=>{
        if(typeof it !== 'undefined'){
          items.push(qs.parse(it).item);
        }
      });
      select(req,res);
      break;
    case 'PUT':
      break;
    case 'DELETE':
      break;
    default:
      break;
  }
}).listen(8080);

function select(req,res){
  var path = url.parse(req.url).pathname;
  var name = '';
  switch(path){
    case '/list/':
      name = 'chapterList.html';
      show(res,name);
      break;
    case '/detail?chapteid=4':
      name = 'chapter.html';
      show(res,name);
      break;
    case '/login/':
      name = 'login.html';
      show(res,name);
      break;
    case '/listmanager/':
      name = 'list.html';
      show(res,name);
      break;
    case '/addChapter/':
      name = 'addChapter.html';
      show(res,name);
      break;
    default:
      err(res);
      break;
  }

  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log('');
  add(req.res);
}

function show(res,name){
  var html = fs.readFileSync(name).toString('utf8');
  res.setHeader('Content-Type','text/html');
  res.setHeader('Content-Length',Buffer.byteLength(html));
  res.statusCode = 200;
  res.end(html);
}

function add(req,res){
  var value = qs.parse(url.parse(req.url).query).item;
  if(typeof value !== 'undefined'){
    items.push(value);
    log(items);
    show(res,name);
  }
}

function err(res){
  var msg = 'Not found!';
  res.statusCode = 404;
  res.setHeader('Content-Length',msg.length);
  res.setHeader('Content-Type','text/plain');
  res.end(msg);
}














