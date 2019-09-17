#!/usr/bin/node

const MyReadable = require('./03-my-readable'),
      stdout = process.stdout;

var r = new MyReadable();

process.stdin.resume();
r.pipe(stdout);
