const http = require('http'),
      url  = require('url'),
      qs   = require('querystring'),
      fs = require('fs'),
                    log  = console.log;

var items = [];

http.createServer((req, res) => {
    var path = url.parse(req.url).pathname;
    console.log(path);

    if(path != '/') {
          err(res);
              return;
                
    }

      log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
        log(req.headers);
          log('');
          add(req, res);

}).listen(8080);

function show(res) {
  var name = 'chapter.html'
    var html = fs.readFileSync(name).toString('utf8'); 
      res.setHeader('Content-Type', 'text/html');
        res.setHeader('Content-Length', Buffer.byteLength(html));

          res.statusCode = 200;
            res.end(html);

}

function add(req, res) {
    var value = qs.parse(url.parse(req.url).query).item;

      if(typeof value !== 'undefined') items.push(value);

        log(items);
          show(res);

}

function err(res) {
    var msg = 'Not found!';

      res.statusCode = 404;
        res.setHeader('Content-Length', msg.length);
          res.setHeader('Content-Type', 'text/plain');

            res.end(msg);

}
