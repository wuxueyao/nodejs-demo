#!/usr/bin/node

const file = process.argv[2] || __filename,
      fs = require('fs'),
      src = process.argv[2],
      dst = process.argv[3];

//src.pipe(dst)
//src = createReadStream
//dst = WriteStream


fs.createReadStream(src).pipe(fs.createWriteStream(dst));
