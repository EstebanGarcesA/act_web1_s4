function saludar(nombre) {
    if (nombre == null) {
        console.log(`¡Hola, invitado!`);
        
    } else {
        console.log(`¡Hola, ${nombre}!`);
        
    }
}

saludar("Ana")