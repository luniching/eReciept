'use strict';

var express = require('express'),
cluster = require('cluster'),
webcore = require('webcore'),
routes = webcore.routes,
rc = webcore.rescompile,
//dust = require('dustjs-linkedin'),
config = webcore.config;

// Initialize any dust extensions. Extensions should export a single function
// that accepts the `dust` object as an argument. Extensions can modify the
// `dust` object as they wish.
//
// The `extendDust` method accepts an array of node module paths.
//
// IMPORTANT: Ensure the list of dependencies stays in sync with those in
// public/js/main.js.
//

 //require('dust-render-helpers');
 //dust.addRenderHelper('dust-sparta-content');
 webcore.extendDust(['./public/js/lib/dust-helpers']);
// Setup the application environment and global context
process.chdir(__dirname);
config.init(process.cwd());

var env = config.get('NODE_ENV');
global.__devenv = !env || env === 'development';




// Create and configure server
var server = express.createServer();


// XXX: The following configure statements are *order-specific* as
// middleware is evaluated in the order it's registered and
// conditionally included per environment.

// First, register the the on-the-fly compiler for development
server.configure('development', function() {
// Compile on-the-fly
server.use(rc.resourceCompiler({
src: config.get('paths:resourceRoot'),
dest: config.get('paths:staticRoot')
}));
});

// Second, add the standard middleware
server.configure(function() {
server.use(express.favicon());
server.use(express.logger());
server.use(express.bodyParser());
server.use(express.cookieParser());
server.use(express.session({ secret: config.get('session:secret') }));
server.use(server.router);
server.use(express['static'](config.get('paths:staticRoot')));
});

// Third, add debugging info for pre-prod environments...
server.configure('development', 'staging', function() {
server.use(express.errorHandler({
dumpExceptions: true,
showStack: true
}));
});

// ...but for prod do not print error details.
server.configure('production', function() {
server.use(express.errorHandler());
});

// Finally, setup server properties
server.configure(function() {
// Scan all routes
routes.scan(server, config.get('paths:routeRoot'));
server.set('static', config.get('paths:staticRoot'));
server.set('view options', { layout: false });
});



// Kick off server startup
// In the future may use cluster2 (http://ql-io.github.com/cluster2/) by eBay,
// but it's pretty heavyweight for our current needs. Also, we'll probably implement
// monitoring separate from a clustering implementation.
var cores = 0;
if (!__devenv && cluster.isMaster) {
cores = require('os').cpus().length;
while (cores--) { cluster.fork(); }
cluster.on('death', function(worker) {
cluster.fork();
});
} else {
server.listen(config.get('port'));
}

console.log('Server running at http://localhost:' + config.get('port') + '/');