#!/usr/bin/node
const http = require('http'),
      qs =  require('querystring'),
      fs = require('fs'),
      log = console.log;
http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log();

  var fl = '';
  req.setEncoding('binary');
  req.on('data',(data)=>{
    fl += data;
  });

  req.on('end',()=>{
    //step 1: parse fl
    //step 1.1: get file name
    var filename = qs.parse(fl.split('\r\n')[1].split(';')[2].trim()).filename;

    filename = filename.slice(1,filename.length-1);
    log(filename);

    //step 1.2: get file data
    var filedata = fl.split('\r\n')[4];
    log(filedata);
    
    //step 2: save file
    fs.writeFileSync(filename,filedata,{'encoding':'binary'});
  });

  res.end('OK!'); 
}).listen(8080);
