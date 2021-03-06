var express     = require('express'),
	  session     = require('express-session'),
	  bodyParser  = require('body-parser'),
    app         = express(),
    server      = app.listen(3000, "0.0.0.0", 
    	function(){
	        var host = server.address().address;
	        var port = server.address().port;
	        console.log('Example app is listening at http://%s:%s', host, port);
    	});
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(require('method-override')()); //to use put and delete HTTP requests
app.use(express.static(__dirname + '/public'));

console.log('info:', 'Setting up sessions...');
app.use( 
	session({
	    secret: 's1mpl3n0d34pp',
	    name: 's1mpl3n0d34pp',
	    resave: true,
	    rolling: true,
	    saveUninitialized: true,
	    cookie: {
			maxAge: 7200000 //2 hours
	    }
 	})
);

// app.use(require(__dirname + '/lib/Parser')());
// app.use(require(__dirname + '/lib/HeaderCheck')());
app.use(require(__dirname + '/config/Router')(express.Router()));
