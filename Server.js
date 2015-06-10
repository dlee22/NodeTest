/**
 * Created by Administrator on 2015-06-10.
 */
var http = require('http');

var connect = require('connect');
var serveStatic = require('serve-static');

connect().use(
    serveStatic("www")
).listen(5001, function() {
        console.log("server Start 5001");
    });