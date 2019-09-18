#!/usr/bin/node

const dir= process.argv[2],
      fs = require('fs');

fs.rmdirSync(dir);
