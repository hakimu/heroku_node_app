var newrelic = require('newrelic');

var http = require('http');

var express = require('express');

var app = express();

var optionsget = {
	host : 'google.com',
	port : 80,
	path : '/',
	method : 'GET'
}

app.use(function(req,res,next){
	console.log("Time:",Date.now());
	next();
});

app.get('/external', function(req,res){
	http.request(optionsget, function(res){
		console.log("statusCode:", res.statusCode);
		res.on('data', function(d){
			console.info('GET result: \n')
			process.stdout.write(d);
			console.info('\n\nCall Completed');
		});
	});
	// reqGet.end();
	// reqGet.on('error',function(e){
	// 	console.error(e);
	// });
});

app.get('/', function(req,res){
	res.send('This is the home page');
	console.log(req.route)
});

app.get('/about', function(req,res){
	res.send('Will this be ignored???');
});

app.get('/test', function(req,res){
	res.send('This is the test page');
	newrelic.addCustomParameter(req.route);
});

app.get('/error', function(req,res){
	throw 'Oooops';
	newrelic.addCustomParameter(req.route);
});

app.get('/status', function(req,res){
  res.status(401);
  res.send("401 errror");
  console.log(res.status);
});

app.get('/check', function(req,res){
  res.status(400);
  res.send("400 errror");
  console.log(res.status);
});

http.createServer(app).listen(3000,function(){
	console.log('Starting....')
});

