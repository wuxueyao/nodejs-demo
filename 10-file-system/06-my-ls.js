#!/usr/bin/node

const dir= process.argv[2] || __dirname,
      fs = require('fs');

console.log(fs.readdirSync(dir))
