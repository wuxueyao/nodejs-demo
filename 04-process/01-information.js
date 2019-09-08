#!/usr/bin/node
const log = console.log;

log('CPU',process.arch);
log('OS',process.platform);
log('PID',process.pid);
log('execPath',process.execPath);

/*process.stdin.on('data',function(data){
 * log(data);
 * })
 * */
log('node.js ver',process.version);
log('uid',process.pid);
log('gid',process.getgid());
log('cwd',process.cwd());

log('');
log('rss',process.memoryUsage().rss);
log('heapTotal',process.memoryUsage().heapUsed);
