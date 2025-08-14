function retrasarMensaje(mensaje,tiempo) {
    setTimeout(function() {
        console.log(mensaje);
    }, tiempo);
}

retrasarMensaje("hola",2000)