#!/usr/bin/node
const http = require('http'),
      url = require('url'),
      cheerio = require('cheerio'),
      log = console.log,
      qs = require('querystring'),
      fs = require('fs'),
      print = require('util').debuglog('crawler');
var items = [];
var userList = [
  {username:'admin',pwd:'admin'}
];

var chapterList = fs.readFileSync('./data/db.json','utf8');
http.createServer((req,res)=>{
  switch(req.method){
    case 'GET':
      show(req,res);
      break;
    case 'POST':
      create(req,res);
      break;
    default:
      break;
  }
}).listen(8080);


function show(req,res){
  var path = url.parse(req.url).pathname;
  var pq = path.query;
  var iq = qs.parse(pq);
  var file = __dirname;
  var fileitem = [];
  log(url);
  log("path:"+path);
  log("pq:"+pq);
  log("file:"+file);
  log("fileitem:"+fileitem);
  log(iq)

  if(iq.chapterId && path != null){
    log('ID'+iq.chapterId);
    var data = JSON.stringify(chapterList[iq.chapterId-1]);
    res.setHeader('Content-Length',Buffer.byteLength(data));
    res.setHeader('Content-Type','text/plain;charset="utf-8"');
    res.setHeader('Access-Content-Allow-Origin','*');
    res.end(data);
  }

  switch(path){
    case '/list/':
      file += '/chapterList.html';
      break;
    case '/login/':
      file += '/login.html';
      create(req,res);
      break;
    case '/listmanager/':
      file += '/list.html';
      break;
    case '/addChapter/':
      file += '/addChapter.html';
      break;
    default:
      var params = req.url.split('?')[0];
      fileitem = params.split('/');
      for(var i=2;i<fileitem.length;i++){
        var name = '/'+fileitem[i];
        file += name;
      }
      break;
  }

  fs.readFile(file,(err,data)=>{
    if(err){
      log(err.message);
      res.statusCode = 404;
      res.end(err.message);
    }else{
      res.writeHead(200,{
        'Content-Type':'text/html'
      });
      res.end(data);
    }
  });
}

function create(req,res){
  if(req.method === 'GET'){
    var name = '';
    if(req.url == '/login/'){
      req.on('data',(data)=>{
        name += qs(data);
        log('data:'+data)
      });
      req.on('end',()=>{
        name = JSON.parse(name);
        userList.forEach((p)=>{
          if(p.username == name.username && p.pwd == name.pwd){
            log('登录成功！');
            res.end('http://192.168.247.144:8080/addChapter/');
          }
          log('登录失败！');
        });
        res.end('ok!');
      });
       
    }
  }

  if(req.url == '/add'){
    req.on('data',(d)=>{
      name += data;
    });
    req.on('end',()=>{
      name = qs.parse(name.toString('utf8'));
      var newText = new CreateText(name.title,name.content);
      chapterList.push(newText);
      log(chapterList[chapterList.length-1]);
    });
    res.end('OK');
  }
}

function add(chapterName,chapterContent,chapterId,imgPath,chapterDes,publishTimer,author,views){
  var obj = new Object();
  obj.chapterId = chapterList.length+1;
  obj.chapterName = chapterName;
  obj.imgPath = imgPath || undefined;
  obj.chapterDes = chapterDes || undefined;
  obj.chapterContent = chapterContent;
  obj.publishTimer = new Date().getTime();
  obj.author = view || undefined;
  return obj;
}
