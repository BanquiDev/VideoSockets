//conexion del cliente al servidor
var socket = io.connect(ip, {'forceNew':true});

var ip = 'http://192.168.1.3:6677'

//capturo el elemento video del DOM
var video = document.querySelector("#myVideo")

//Play al video y comunico el evento al servidor
function playVideo(){
    
    video.play()
    var play = true
    socket.emit('play', function(){
        console.log('play emitido')
    })

}
// Pausa al video y comunico el evento al servidor
function pauseVideo(){
    
    video.pause()
    socket.emit('stop', function(){
        console.log('stop emitido')
    })
}

//Escucho el evento playAll emitido por el server y ejecuto la funcion play en todos los clientes
socket.on('playAll', function(){
    console.log('dale play')
    playAllVideo()
})

function playAllVideo(){
    video.play()
}
// Escucho el evento stopAll emitido x el server y ejecuto la funcion stop para todos los clientes.

socket.on('stopAll', function(){
    console.log('dale stop')
   stopAllVideo()
})

function stopAllVideo(){
    video.pause()
}