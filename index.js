require('./db/mongoose')
const express=require('express')
const router=require ('./router/userRouter')
var bodyParser = require('body-parser');

const app=express()
var http = require('http').Server(app);
var io = require('socket.io')(http);
const port= process.env.PORT||3001

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(__dirname + '/public'));
app.use(router)
app.use(bodyParser.json()); 
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ 
    extended: true
}));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/menu.html');
});
app.get('/signin', function(req, res) {
    res.sendFile(__dirname + '/public/signin.html');
});
app.get('/signup', function(req, res) {
    res.sendFile(__dirname + '/public/signup.html');
});
app.get('/lobby', function(req, res) {
  res.sendFile(__dirname + '/public/lobby.html');
});



io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
    });
  });
  
  http.listen(port, function(){
    console.log('listening on *:' + port);
  });