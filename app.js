var express = require('express');
var todoControler = require('./controler/todocontroler');
var app = express();
var exphbs = require('express-handlebars');



//set up template engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//static files
app.use(express.static('./public'));


//fire controllers
todoControler(app);


//listen to port

app.listen(3000, function(){ console.log('server is up on port 3000');});

