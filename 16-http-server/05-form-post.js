#!/usr/bin/node
const http = require('http'),
      log = console.log,
      url= require('url'),
      qs = require('querystring');
var items= ['jieshou']; //用来接收
http.createServer((req,res)=>{
  if(req.method === 'GET' && req.url === '/'){
    res.writeHead(200,{
      'Content-Type':'text/html'
    });
    log(req.headers);
    add(req,res);
  }else if(req.method === 'POST' && req.url === '/'){
    //提交数据
    var it = '';
    req.on('data',(data)=>{
      it += data;
    })
    req.on('end',()=>{
      if(typeof it !== 'undefined'){
        items.push(qs.parse(it).item);
      }
      show(res);
    })
  }else{
    res.statusCode = 404;
    res.setahEACEWOJVPIHQQQQQPVWVEPJWEVEWJEOWPEJVVPEJP//////////
  }
}).listen(8080);

function show(res){
  var html= ''
    +'<!DOCTYPE html>'
    + '<html lang="en">'
    + '<head>'
      + '<meta charset="UTF-8">'
      + '<title>TODO List</title>'
    + '</head>'
    + '<body>'
    + '<h1>TODO List</h1>'
    + '<ul>'
    +items.map(function(it){return '<li>'+it+'</li>';}).join('\n')
    +'</ul>'
    + '<form method="POST"> action="/"'
      +'<input type="text" name="item">'
      +'<input type="submit" value="提交">'
    +'</form>'
    + '</body>'
    + '</html>';

  res.setHeader('Content-Type','text/html');
  res.setHeader('Content-Length',Buffer.byteLength(html));

  res.statusCode = 200;
  res.end(html);
}

function add(req,res){
  var value = qs.parse(url.parse(req.url).query).item;

  if(typeof value !== 'undefined'){
    items.push(value);

    show(res);
  }
}

function err(res){
  var msg = 'Not found!';

  res.statusCode = 404;
  res.setHeader('Content-Length',msg.length);
  res.setHeader('Content-Type','text/plain');

  res.end(msg);
}





