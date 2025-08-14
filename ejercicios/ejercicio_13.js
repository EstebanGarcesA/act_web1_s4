const reemplazarEspacion = function (texto){
   
    let textoCorregido = "";

    for(let i=0;i<texto.length;i++){
        let caracter = texto[i];
        if(caracter === " "){
        caracter = "-"
        
    }
    textoCorregido+=caracter;
    }
    return textoCorregido
}



console.log(reemplazarEspacion("Hola Mundo"));
