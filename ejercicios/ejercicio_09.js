function crearContador() {
    let contador = 0;
    return function() {
        return contador++;
    };
}

const contador1 = crearContador();
console.log(contador1()); 
console.log(contador1()); 

