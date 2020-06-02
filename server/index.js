var express = require('express')
var app = express()
var server = require('http').Server(app)

var io = require('socket.io')(server)

app.use(express.static('client'))

app.get('/', function(req, res){
    res.status(200).send("hola")
})

//Escucho los clients

io.on('connection', function(socket){
    console.log("El cliente se ha conectado")

    //escucho el evento play y ejecuto la emision para todos mis sockets del evento playAll   

    socket.on('play', function(){
        
        console.log('play recibido')
        io.sockets.emit('playAll')
    })

    //escucho el evento stop y ejecuto la emision para todos mis sockets del evento stopAll 

    socket.on('stop', function(){
        console.log('stop recibido')
        io.sockets.emit('stopAll')
    })

})



server.listen(6677, ()=>{
    console.log('Servidor funciona en puerto:6677')
})